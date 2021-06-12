const dbQueries = require('../Queries.js');
// const { errorMessage, successMessage, status } = require('../helpers/status');

const Teammate = async (req, res) => {

//   const age = (req.body.age);
  const onlinetime = (req.body.onlinetime);
  const rank = (req.body.rank);
  const usernameweb = (req.body.usernameweb);
//   const iddantag = (req.body.iddantag);
  
  const getAllRows = `select iddantag from teamvalo
                      where onlinetime= $1 and rank= $2 and iddantag is not null
                      except select iddantag from teamvalo
                      where usernameweb = $3 limit 4`;
  try {
    const {
      rows
    } = await dbQueries(getAllRows,  [onlinetime, rank, usernameweb]);
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
      res.send('Sukses')
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