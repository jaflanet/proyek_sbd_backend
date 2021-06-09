const dbQueries = require('../Queries.js');
// const { errorMessusername, successMessusername, status } = require('../helpers/status');

const getML = async (req, res) => {
    const getAllRows = `select * from MobileLegend`;
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

const masukML = async (req, res) => {
  const id = (req.body.id);
  const usernameml = (req.body.usernameml);
  const role = (req.body.role);
  const rank = (req.body.rank);
  const usernameweb = (req.params.usernameweb);
  const getAllRows = `INSERT INTO MobileLegend (id, usernameml, role, rank, usernameweb) VALUES ($1, $2, $3, $4, $5)`;
  try {
    const {
      rows
    } = await dbQueries(getAllRows, [id, usernameml, role, rank, `${usernameweb}`]);
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

const updateML = async (req, res) => {
  const id = (req.body.id);
  const usernameml = (req.body.usernameml);
  const role = (req.body.role);
  const rank = (req.body.rank);
  const usernameweb = (req.params.usernameweb);
  const getAllRows = `Update MobileLegend set id= $1, usernameml=$2, role=$3, rank=$4 where usernameweb=$5 `;
  try {
    const {
      rows
    } = await dbQueries(getAllRows, [id, usernameml, role, rank, `${usernameweb}`] );
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

const deleteML = async (req, res) => {
    const usernameweb = (req.params.usernameweb)
  const getAllRows = `delete from MobileLegend  where usernameweb=$1 `;
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
  masukML,
  getML,
  updateML,
  deleteML
}

//ini buat coba