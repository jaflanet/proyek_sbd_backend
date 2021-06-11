const dbQueries = require('../Queries.js');

const getLogin = async (req, res) => {
const username = (req.body.username);
const password = (req.body.password);
  const getAllRows = `select * from pengguna where username = $1 and password = $2`;
  try {
    const {
      rows
    } = await dbQueries(getAllRows, [username, password]);
    const dbResponse = rows;
    if (dbResponse[0] === undefined) {
      res.send('Wrong username/password combination! ')
    }
    res.send(dbResponse)
  } catch (error) {
    if (error) {
      res.send(' Wrong username/password combination! ' + error.code);
      return;
    }
  } 
}


module.exports = {
    getLogin
}