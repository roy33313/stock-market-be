const sqlite3 = require('sqlite3').verbose()

const db = new sqlite3.Database('test.db');

db.run("CREATE TABLE IF NOT EXISTS mytable (id INTEGER PRIMARY KEY, name TEXT, age INTEGER)");

db.run("INSERT INTO mytable (name, age) VALUES ('John', 30)");
db.run("INSERT INTO mytable (name, age) VALUES ('Jane', 20)");

db.all("SELECT * FROM mytable", function(err, rows) {
    rows.forEach(function (row) {
      console.log(row.id + ": " + row.name + " (" + row.age + ")");
    });
   });