const pool = require('./pool');

pool.on('connect', () => {
  console.log('connected to the database')
})

//add queries here

module.exports = {}