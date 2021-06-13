"use strict";

var dbQueries = require('../Queries.js'); // const { errorMessage, successMessage, status } = require('../helpers/status');


var Signup = function Signup(req, res) {
  var username, age, gender, region, onlinetime, getAllRows, _ref, rows, dbResponse;

  return regeneratorRuntime.async(function Signup$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          username = req.body.username;
          age = req.body.age;
          gender = req.body.gender;
          region = req.body.region; // const games = (req.body.games);

          onlinetime = req.body.onlinetime;
          getAllRows = "INSERT INTO PENGGUNA (username, age, gender, region, onlinetime) VALUES ($1, $2, $3, $4, $5)";
          _context.prev = 6;
          _context.next = 9;
          return regeneratorRuntime.awrap(dbQueries(getAllRows, [username, age, gender, region, onlinetime]));

        case 9:
          _ref = _context.sent;
          rows = _ref.rows;
          dbResponse = rows;

          if (dbResponse[0] === undefined) {
            res.send('Sukses');
          }

          res.send(dbResponse);
          _context.next = 21;
          break;

        case 16:
          _context.prev = 16;
          _context.t0 = _context["catch"](6);

          if (!_context.t0) {
            _context.next = 21;
            break;
          }

          res.send('error ' + _context.t0.code);
          return _context.abrupt("return");

        case 21:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[6, 16]]);
};

var getSignup = function getSignup(req, res) {
  var getAllRows, _ref2, rows, dbResponse;

  return regeneratorRuntime.async(function getSignup$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          getAllRows = "select * from pengguna";
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(dbQueries(getAllRows));

        case 4:
          _ref2 = _context2.sent;
          rows = _ref2.rows;
          dbResponse = rows;

          if (dbResponse[0] === undefined) {
            res.send('Sukses');
          }

          res.send(dbResponse);
          _context2.next = 16;
          break;

        case 11:
          _context2.prev = 11;
          _context2.t0 = _context2["catch"](1);

          if (!_context2.t0) {
            _context2.next = 16;
            break;
          }

          res.send('error ' + _context2.t0.code);
          return _context2.abrupt("return");

        case 16:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 11]]);
};

module.exports = {
  Signup: Signup,
  getSignup: getSignup
};