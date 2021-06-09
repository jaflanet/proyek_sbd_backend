const express = require ('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const startDatabase = require('./pool');
const app = express()

// require('dotenv').config()

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }))


// export routing
const signupRoute = require('./routes/signupRoutes')
const valoRoute = require('./routes/valoRoutes')
const MLRoute = require('./routes/MLRoutes')
const pubgroute = require('./routes/PUBGRoutes')
const TeamRoute = require('./routes/TeamValoRoutes')

// start database
// startDatabase();

app.use(logger('dev'));
app.use('/signup', signupRoute);
app.use('/valo', valoRoute);
app.use('/ML', MLRoute);
app.use('/PUBG', pubgroute);
app.use('/team', TeamRoute);



app.listen(6978, () => {
    console.log(`Listening at port 6978`)
})

//comment