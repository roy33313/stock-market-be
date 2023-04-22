const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/login", (req, res) => {
  console.log(req.body);
  if (req.body.email === "royal123@gmail.com" && req.body.password === "1234") {
    res.json({ name: "royalpinto", phoneNo: "5829191", status: 200 });
  } else {
    res.json({ status: 404 });
  }
});

app.listen(process.env.PORT_NO, () => {
  console.log(
    `Example app listening at http://localhost:${process.env.PORT_NO}`
  );
});
