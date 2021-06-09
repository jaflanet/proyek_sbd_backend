const dbQueries = require('../Queries.js');
// const { errorMessage, successMessage, status } = require('../helpers/status');

const TeammateML = async (req, res) => {
//   const age = (req.body.age);
  const onlinetime = (req.body.onlinetime);
  const username = (req.params.username);
//   const usernameml = (req.body.usernameml);
  
  const getAllRows = `select usernameml from teamml
                      where onlinetime= $1 and usernameml is not null
                      except select usernameml from teamml
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

const getTeamML = async (req, res) => {
  const getAllRows = `select * from teamml`;
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
  TeammateML, 
  getTeamML
}