const connection = require("./connection.js");

const orm = {
    selectAll: function(cb) {
      let queryString = "SELECT * FROM burgers;";
      connection.query(queryString, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    insertOne: function (burger, cb){
      let queryString = `INSERT INTO burgers (burger_name) VALUES (?);`;
      connection.query(queryString, burger, function(err, result) {
        if (err) {
          throw err;
        }
        cb(result);
      });
    },
    updateOne: function (){}
}

module.exports = orm;