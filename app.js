const express = require("express");
const { allowedNodeEnvironmentFlags } = require("process");
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("show");
});
