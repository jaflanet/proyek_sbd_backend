const express = require ('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const startDatabase = require('./pool');
const app = express()
var cors = require('cors')


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
const loginRoute = require('./routes/loginRoutes')

// start database
// startDatabase();

app.use(logger('dev'));
app.use(cors());
app.use('/login', loginRoute);
// app.post('/login', (req, res)=> {
//   const username = (req.body.username);
//   const password = (req.body.password);
//   db.query(
//     `select * from pengguna where username = $1 and password = $2`,
//     [username, password],
//     (err, result) => {
//       if (err) {
//         res.send({err: err});
//       }
//       if (result) {
//         res.send(result);
//       } else {
//         res.send('wrong combination');
//       }
//     }
//   );
// })
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