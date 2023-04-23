const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const db = require("./database/connection");
const news= require("./src/assets/data/news.json")
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.get("/news", (req, res) => {
  res.json(news)
})

app.post("/login", (req, res) => {
  db.all(
    `SELECT * FROM User WHERE email = '${req.body.email}' and password = '${req.body.password}'`,
    (err, rows) => {
      if (err) {
        console.log(err);
        res.json({ status: 400 });
      }

      console.log(rows);
      if (rows.length == 0) {
        res.json({ status: 404 });
      } else {
        res.json({
          email: rows[0].email,
          password: rows[0].password,
          firstName: rows[0].firstName,
          lastName: rows[0].lastName,
          phoneNo: rows[0].phoneNo,
          status: 200,
        });
      }
    }
  );
});

app.post("/register", (req, res) => {
  const query =
    "INSERT INTO User (email, password, firstName, lastName, phoneNo) VALUES (?,?,?,?,?)";
  const values = [
    req.body.email,
    req.body.password,
    req.body.firstName,
    req.body.lastName,
    req.body.phoneNo,
  ];
  console.log(req.body);

  db.run(query, values, (err) => {
    if (err) {
      console.log(err.message);
      res.json({ status: 400 });
    } else {
      res.json({ status: 200 });
    }
  });
});

app.listen(process.env.PORT_NO, () => {
  console.log(
    `Example app listening at http://localhost:${process.env.PORT_NO}`
  );
});
