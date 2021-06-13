"use strict";

var express = require('express');

var bodyParser = require('body-parser');

var logger = require('morgan');

var startDatabase = require('./proyek/pool');

var app = express();

var cors = require('cors');

require('dotenv').config(); // require('dotenv').config()


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
})); // export routing

var signupRoute = require('./proyek/routes/signupRoutes');

var valoRoute = require('./proyek/routes/valoRoutes');

var MLRoute = require('./proyek/routes/MLRoutes');

var pubgroute = require('./proyek/routes/PUBGRoutes');

var TeamValoRoute = require('./proyek/routes/TeamValoRoutes');

var TeamMLRoute = require('./proyek/routes/TeamMLRoutes');

var TeamPUBGRoute = require('./proyek/routes/TeamPUBGRoutes');

var loginRoute = require('./proyek/routes/loginRoutes'); // start database
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
app.listen(process.env.PORT || 3000, function () {
  console.log("Listening at port ".concat(process.env.PORT));
}); // app.listen(6970, () => {
//     console.log(`Listening at port 6970`)
// })
//comment