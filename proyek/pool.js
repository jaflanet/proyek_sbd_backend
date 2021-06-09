
const { Pool } = require('pg');

const databaseConfig = new Pool({

    user: "hmthsyfvkvmlxo",
    host: "ec2-18-214-140-149.compute-1.amazonaws.com",
    database: "dd39j3vf9eql3",
    password:process.env.PASS,
    port: "5432",
    ssl: {
        rejectUnauthorized: false
      }
})


module.exports = databaseConfig;