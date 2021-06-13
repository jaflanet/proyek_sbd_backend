"use strict";

var dbQueries = require('../Queries.js'); // const { errorMessage, successMessage, status } = require('../helpers/status');


var Signup = function Signup(req, res) {
  var username, password, age, gender, region, onlinetime, getAllRows, _ref, rows, dbResponse;

  return regeneratorRuntime.async(function Signup$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          username = req.body.username;
          password = req.body.password;
          age = req.body.age;
          gender = req.body.gender;
          region = req.body.region; // const games = (req.body.games);

          onlinetime = req.body.onlinetime;
          getAllRows = "INSERT INTO PENGGUNA (username, password, age, gender, region, onlinetime) VALUES ($1, $2, $3, $4, $5, $6)";
          _context.prev = 7;
          _context.next = 10;
          return regeneratorRuntime.awrap(dbQueries(getAllRows, [username, password, age, gender, region, onlinetime]));

        case 10:
          _ref = _context.sent;
          rows = _ref.rows;
          dbResponse = rows;

          if (dbResponse[0] === undefined) {
            res.send('no files');
          }

          res.send(dbResponse);
          _context.next = 22;
          break;

        case 17:
          _context.prev = 17;
          _context.t0 = _context["catch"](7);

          if (!_context.t0) {
            _context.next = 22;
            break;
          }

          res.send('error ' + _context.t0.code);
          return _context.abrupt("return");

        case 22:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[7, 17]]);
};

var getSignup = function getSignup(req, res) {
  var username, getAllRows, _ref2, rows, dbResponse;

  return regeneratorRuntime.async(function getSignup$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          username = req.body.username;
          getAllRows = "select * from pengguna where username=$1";
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(dbQueries(getAllRows, ["".concat(username)]));

        case 5:
          _ref2 = _context2.sent;
          rows = _ref2.rows;
          dbResponse = rows;

          if (dbResponse[0] === undefined) {
            res.send('no files');
          }

          res.send(dbResponse);
          _context2.next = 17;
          break;

        case 12:
          _context2.prev = 12;
          _context2.t0 = _context2["catch"](2);

          if (!_context2.t0) {
            _context2.next = 17;
            break;
          }

          res.send('error ' + _context2.t0.code);
          return _context2.abrupt("return");

        case 17:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 12]]);
};

module.exports = {
  Signup: Signup,
  getSignup: getSignup
};