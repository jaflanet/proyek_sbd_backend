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
const TeamValoRoute = require('./routes/TeamValoRoutes')
const TeamMLRoute = require('./routes/TeamMLRoutes')
const TeamPUBGRoute = require('./routes/TeamPUBGRoutes')

// start database
// startDatabase();

app.use(logger('dev'));
app.use('/signup', signupRoute);
app.use('/valo', valoRoute);
app.use('/ML', MLRoute);
app.use('/PUBG', pubgroute);
app.use('/teamValo', TeamValoRoute);
app.use('/teamML', TeamMLRoute);
app.use('/teamPUBG', TeamPUBGRoute);




app.listen(6979, () => {
    console.log(`Listening at port 6979`)
})

//comment