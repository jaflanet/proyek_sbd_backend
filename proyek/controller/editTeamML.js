const dbQueries = require('../Queries.js');
// const { errorMessage, successMessage, status } = require('../helpers/status');

const TeammateML = async (req, res) => {
const onlinetime = (req.body.onlinetime);
const rank = (req.body.rank);
const usernameweb = (req.body.usernameweb);

const getAllRows = `select id, role, rank from teamml
                    where onlinetime= $1 and rank= $2 and id is not null
                    except select id from teamml
                    where usernameweb= $3 limit 5`;
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

const getTeamML = async (req, res) => {
  const getAllRows = `select * from teamml`;
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
  TeammateML, 
  getTeamML
}