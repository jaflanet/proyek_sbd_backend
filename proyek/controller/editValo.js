const dbQueries = require('../Queries.js');
// const { errorMessrank, successMessrank, status } = require('../helpers/status');

const getValo = async (req, res) => {
    const getAllRows = `select * from valorant`;
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

const masukValo = async (req, res) => {
  const iddantag = (req.body.iddantag);
  const rank = (req.body.rank);
  const favoriteagents = (req.body.favoriteagents);
  const role = (req.body.role);
  const usernameweb = (req.body.usernameweb);
  const getAllRows = `INSERT INTO valorant (iddantag, rank, favoriteagents, role, usernameweb) VALUES ($1, $2, $3, $4, $5)`;
  try {
    const {
      rows
    } = await dbQueries(getAllRows, [iddantag, rank, favoriteagents, role, usernameweb]);
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

const updateValo = async (req, res) => {
  const iddantag = (req.body.iddantag);
  const rank = (req.body.rank);
  const favoriteagents = (req.body.favoriteagents);
  const role = (req.body.role);
  const usernameweb = (req.body.usernameweb);
  const getAllRows = `Update valorant set iddantag= $1, rank=$2, favoriteagents=$3, role=$4 where usernameweb=$5 `;
  try {
    const {
      rows
    } = await dbQueries(getAllRows, [iddantag, rank, favoriteagents, role, usernameweb] );
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

const deleteValo = async (req, res) => {
    const usernameweb = (req.body.usernameweb)
  const getAllRows = `delete from valorant  where usernameweb=$1 `;
  try {
    const {
      rows
    } = await dbQueries(getAllRows, [usernameweb]) ;
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
  masukValo,
  getValo,
  updateValo,
  deleteValo
}