
const { Pool } = require('pg');

const databaseConfig = new Pool({

    user: "hmthsyfvkvmlxo",
    host: "ec2-18-214-140-149.compute-1.amazonaws.com",
    database: "dd39j3vf9eql3",
    password: "c0a2b297252908007bc202555c09852bf5fe44e06bbd4b24460c0a0ee565458c",
    port: "5432",
    ssl: {
        rejectUnauthorized: false
      }
})


module.exports = databaseConfig;