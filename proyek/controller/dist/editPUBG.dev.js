"use strict";

var dbQueries = require('../Queries.js'); // const { errorMessusername, successMessusername, status } = require('../helpers/status');


var getPUBG = function getPUBG(req, res) {
  var getAllRows, _ref, rows, dbResponse;

  return regeneratorRuntime.async(function getPUBG$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          getAllRows = "select * from PUBG";
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(dbQueries(getAllRows));

        case 4:
          _ref = _context.sent;
          rows = _ref.rows;
          dbResponse = rows;

          if (dbResponse[0] === undefined) {
            res.send('no files');
          }

          res.send(dbResponse);
          _context.next = 16;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](1);

          if (!_context.t0) {
            _context.next = 16;
            break;
          }

          res.send('error ' + _context.t0.code);
          return _context.abrupt("return");

        case 16:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 11]]);
};

var masukPUBG = function masukPUBG(req, res) {
  var usernamepubg, role, rank, usernameweb, getAllRows, _ref2, rows, dbResponse;

  return regeneratorRuntime.async(function masukPUBG$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          usernamepubg = req.body.usernamepubg;
          role = req.body.role;
          rank = req.body.rank;
          usernameweb = req.body.usernameweb;
          getAllRows = "INSERT INTO PUBG (usernamepubg, role, rank, usernameweb) VALUES ($1, $2, $3, $4)";
          _context2.prev = 5;
          _context2.next = 8;
          return regeneratorRuntime.awrap(dbQueries(getAllRows, [usernamepubg, role, rank, usernameweb]));

        case 8:
          _ref2 = _context2.sent;
          rows = _ref2.rows;
          dbResponse = rows;

          if (dbResponse[0] === undefined) {
            res.send('Sukses');
          }

          res.send(dbResponse);
          _context2.next = 20;
          break;

        case 15:
          _context2.prev = 15;
          _context2.t0 = _context2["catch"](5);

          if (!_context2.t0) {
            _context2.next = 20;
            break;
          }

          res.send('error ' + _context2.t0.code);
          return _context2.abrupt("return");

        case 20:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[5, 15]]);
};

var updatePUBG = function updatePUBG(req, res) {
  var username, role, rank, usernameweb, getAllRows, _ref3, rows, dbResponse;

  return regeneratorRuntime.async(function updatePUBG$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          username = req.body.username;
          role = req.body.role;
          rank = req.body.rank;
          usernameweb = req.body.usernameweb;
          getAllRows = "Update PUBG set username=$1, role=$2, rank=$3 where usernameweb=$4 ";
          _context3.prev = 5;
          _context3.next = 8;
          return regeneratorRuntime.awrap(dbQueries(getAllRows, [username, role, rank, usernameweb]));

        case 8:
          _ref3 = _context3.sent;
          rows = _ref3.rows;
          dbResponse = rows;

          if (dbResponse[0] === undefined) {
            res.send('Sukses');
          }

          res.send(dbResponse);
          _context3.next = 20;
          break;

        case 15:
          _context3.prev = 15;
          _context3.t0 = _context3["catch"](5);

          if (!_context3.t0) {
            _context3.next = 20;
            break;
          }

          res.send('error ' + _context3.t0.code);
          return _context3.abrupt("return");

        case 20:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[5, 15]]);
};

var deletePUBG = function deletePUBG(req, res) {
  var usernameweb, getAllRows, _ref4, rows, dbResponse;

  return regeneratorRuntime.async(function deletePUBG$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          usernameweb = req.body.usernameweb;
          getAllRows = "delete from PUBG  where usernameweb=$1 ";
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(dbQueries(getAllRows, [usernameweb]));

        case 5:
          _ref4 = _context4.sent;
          rows = _ref4.rows;
          dbResponse = rows;

          if (dbResponse[0] === undefined) {
            res.send('Sukses');
          }

          res.send(dbResponse);
          _context4.next = 17;
          break;

        case 12:
          _context4.prev = 12;
          _context4.t0 = _context4["catch"](2);

          if (!_context4.t0) {
            _context4.next = 17;
            break;
          }

          res.send('error ' + _context4.t0.code);
          return _context4.abrupt("return");

        case 17:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 12]]);
};

module.exports = {
  masukPUBG: masukPUBG,
  getPUBG: getPUBG,
  updatePUBG: updatePUBG,
  deletePUBG: deletePUBG
};