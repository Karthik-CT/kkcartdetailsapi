const express = require("express");
const app = express();
const importData = require("./data.json");
const importData2 = require("./data1.json");
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/cartdetails", (req, res) => {
  res.send(importData);
});

app.get("/cartdetails?id=kk1611", (req, res) => {
  res.send(importData2);
});

app.listen(port, () => {
  console.log("Example is listening on port http://localhost:" + port);
});
