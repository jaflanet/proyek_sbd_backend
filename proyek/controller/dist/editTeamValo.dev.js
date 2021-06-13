"use strict";

var dbQueries = require('../Queries.js'); // const { errorMessage, successMessage, status } = require('../helpers/status');


var Teammate = function Teammate(req, res) {
  var onlinetime, rank, usernameweb, getAllRows, _ref, rows, dbResponse;

  return regeneratorRuntime.async(function Teammate$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          //   const age = (req.body.age);
          onlinetime = req.body.onlinetime;
          rank = req.body.rank;
          usernameweb = req.body.usernameweb; //   const iddantag = (req.body.iddantag);

          getAllRows = "select iddantag from teamvalo\n                      where onlinetime= $1 and rank= $2 and iddantag is not null\n                      except select iddantag from teamvalo\n                      where usernameweb = $3 limit 4";
          _context.prev = 4;
          _context.next = 7;
          return regeneratorRuntime.awrap(dbQueries(getAllRows, [onlinetime, rank, usernameweb]));

        case 7:
          _ref = _context.sent;
          rows = _ref.rows;
          dbResponse = rows;

          if (dbResponse[0] === undefined) {
            res.send(dbResponse);
          }

          res.send(dbResponse);
          _context.next = 19;
          break;

        case 14:
          _context.prev = 14;
          _context.t0 = _context["catch"](4);

          if (!_context.t0) {
            _context.next = 19;
            break;
          }

          res.send('error ' + _context.t0.code);
          return _context.abrupt("return");

        case 19:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[4, 14]]);
};

var getTeam = function getTeam(req, res) {
  var getAllRows, _ref2, rows, dbResponse;

  return regeneratorRuntime.async(function getTeam$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          getAllRows = "select * from teamvalo";
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
  Teammate: Teammate,
  getTeam: getTeam
};