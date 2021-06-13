const dbQueries = require('../Queries.js');
// const { errorMessage, successMessage, status } = require('../helpers/status');

const Signup = async (req, res) => {
  const username = (req.body.username);
  const age = (req.body.age);
  const gender = (req.body.gender);
  const region = (req.body.region);
  // const games = (req.body.games);
  const onlinetime = (req.body.onlinetime);
  
  const getAllRows = `INSERT INTO PENGGUNA (username, age, gender, region, onlinetime) VALUES ($1, $2, $3, $4, $5)`;
  try {
    const {
      rows
    } = await dbQueries(getAllRows, [username, password, age, gender, region, onlinetime]);
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

const getSignup = async (req, res) => {
  const getAllRows = `select * from pengguna`;
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
  Signup, 
  getSignup
}