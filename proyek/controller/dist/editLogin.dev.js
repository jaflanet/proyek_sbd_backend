"use strict";

var dbQueries = require('../Queries.js');

var getLogin = function getLogin(req, res) {
  var username, password, getAllRows, _ref, rows, dbResponse;

  return regeneratorRuntime.async(function getLogin$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          username = req.body.username;
          password = req.body.password;
          getAllRows = "select * from pengguna where username = $1 and password = $2";
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(dbQueries(getAllRows, [username, password]));

        case 6:
          _ref = _context.sent;
          rows = _ref.rows;
          dbResponse = rows;

          if (dbResponse[0] === undefined) {
            res.send('Wrong username/password combination! ');
          }

          res.send(dbResponse);
          _context.next = 18;
          break;

        case 13:
          _context.prev = 13;
          _context.t0 = _context["catch"](3);

          if (!_context.t0) {
            _context.next = 18;
            break;
          }

          res.send(' Wrong username/password combination! ' + _context.t0.code);
          return _context.abrupt("return");

        case 18:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3, 13]]);
};

module.exports = {
  getLogin: getLogin
};