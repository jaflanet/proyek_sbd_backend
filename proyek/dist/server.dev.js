"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var logger = require('morgan');

var startDatabase = require('./pool');

var app = express();

var cors = require('cors'); // require('dotenv').config()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); // export routing

var signupRoute = require('./routes/signupRoutes');

var valoRoute = require('./routes/valoRoutes');

var MLRoute = require('./routes/MLRoutes');

var pubgroute = require('./routes/PUBGRoutes');

var TeamValoRoute = require('./routes/TeamValoRoutes');

var TeamMLRoute = require('./routes/TeamMLRoutes');

var TeamPUBGRoute = require('./routes/TeamPUBGRoutes');

var loginRoute = require('./routes/loginRoutes'); // start database
// startDatabase();


app.use(logger('dev'));
app.use(cors());
app.use('/login', loginRoute); // app.post('/login', (req, res)=> {
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
app.listen(6970, function () {
  console.log("Listening at port 6970");
}); //comment