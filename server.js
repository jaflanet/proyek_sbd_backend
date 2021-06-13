const express = require ('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const startDatabase = require('./proyek/pool');
const app = express()
var cors = require('cors')


// require('dotenv').config()
 
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  }))


// export routing
const signupRoute = require('./proyek/routes/signupRoutes')
const valoRoute = require('./proyek/routes/valoRoutes')
const MLRoute = require('./proyek/routes/MLRoutes')
const pubgroute = require('./proyek/routes/PUBGRoutes')
const TeamValoRoute = require('./proyek/routes/TeamValoRoutes')
const TeamMLRoute = require('./proyek/routes/TeamMLRoutes')
const TeamPUBGRoute = require('./proyek/routes/TeamPUBGRoutes')
const loginRoute = require('./proyek/routes/loginRoutes')

// start database
// startDatabase();

app.use(logger('dev'));
app.use(cors());
app.use('/login', loginRoute);
app.use('/signup', signupRoute);
app.use('/valo', valoRoute);
app.use('/ML', MLRoute);
app.use('/PUBG', pubgroute);
app.use('/teamValo', TeamValoRoute);
app.use('/teamML', TeamMLRoute);
app.use('/teamPUBG', TeamPUBGRoute);




app.listen(6970, () => {
    console.log(`Listening at port 6970`)
})

//comment