const dbQueries = require('../Queries.js');
// const { errorMessage, successMessage, status } = require('../helpers/status');

const TeammatePUBG = async (req, res) => {
//   const age = (req.body.age);
  const onlinetime = (req.body.onlinetime);
  const rank = (req.body.rank);
  const usernameweb = (req.body.usernameweb);
//   const usernameml = (req.body.usernameml);
  
  const getAllRows = `select usernamepubg, role, rank from teampubg
                      where onlinetime= $1 and rank= $2 and usernamepubg is not null
                      except select usernamepubg from teampubg
                      where usernameweb= $3 limit 4`;
 
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

const getTeamPUBG = async (req, res) => {
  const getAllRows = `select * from teampubg`;
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
  TeammatePUBG, 
  getTeamPUBG
}