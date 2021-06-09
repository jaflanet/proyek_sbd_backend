const dbQueries = require('../Queries.js');
// const { errorMessage, successMessage, status } = require('../helpers/status');

const Teammate = async (req, res) => {

//   const age = (req.body.age);
  const onlinetime = (req.body.onlinetime);
  const username = (req.params.username);
//   const iddantag = (req.body.iddantag);
  
  const getAllRows = `select iddantag from teamvalo
                      where onlinetime= $1 and iddantag is not null
                      except select iddantag from teamvalo
                      where username = $2`;
  try {
    const {
      rows
    } = await dbQueries(getAllRows,  [onlinetime, `${username}`]);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      res.send(dbResponse)
    }
    res.send(dbResponse)
  } catch (error) {
    if (error) {
      res.send('error ' + error.code);
      return;
    }
  }
}

const getTeam = async (req, res) => {
  const getAllRows = `select * from teamvalo`;
  try {
    const {
      rows
    } = await dbQueries(getAllRows);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      res.send('no files')
    }
    res.send(dbResponse)
  } catch (error) {
    if (error) {
      res.send('error ' + error.code);
      return;
    }
  } 
}


module.exports = {
  Teammate, getTeam
}