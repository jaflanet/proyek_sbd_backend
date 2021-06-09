const dbQueries = require('../Queries.js');
// const { errorMessusername, successMessusername, status } = require('../helpers/status');

const getPUBG = async (req, res) => {
    const getAllRows = `select * from PUBG`;
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

const masukPUBG = async (req, res) => {
  const username = (req.body.usernamepubg);
  const role = (req.body.role);
  const rank = (req.body.rank);
  const usernameweb = (req.params.usernameweb);
  const getAllRows = `INSERT INTO PUBG (usernamepubg, role, rank, usernameweb) VALUES ($1, $2, $3, $4)`;
  try {
    const {
      rows
    } = await dbQueries(getAllRows, [usernamepubg, role, rank, `${usernameweb}`]);
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

const updatePUBG = async (req, res) => {
  const username = (req.body.username);
  const role = (req.body.role);
  const rank = (req.body.rank);
  const usernameweb = (req.params.usernameweb);
  const getAllRows = `Update PUBG set username=$1, role=$2, rank=$3 where usernameweb=$4 `;
  try {
    const {
      rows
    } = await dbQueries(getAllRows, [username, role, rank, `${usernameweb}`] );
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

const deletePUBG = async (req, res) => {
    const usernameweb = (req.params.usernameweb)
  const getAllRows = `delete from PUBG  where usernameweb=$1 `;
  try {
    const {
      rows
    } = await dbQueries(getAllRows, [`${usernameweb}`]) ;
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
  masukPUBG,
  getPUBG,
  updatePUBG,
  deletePUBG
}