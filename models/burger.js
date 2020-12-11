const orm = require("../config/orm.js");

const burger = {
  selectAll: function(cb) {
    orm.selectAll(function(res) {
      cb(res);
    });
  },
  insertOne: function(burger, cb) {
    orm.insertOne(burger, function(res) {
      cb(res);
    });
  },
  updateOne: function(queryid, cb) {
    orm.updateOne(queryid, function(res) {
      cb(res);
    });
  }
};



  module.exports = burger;