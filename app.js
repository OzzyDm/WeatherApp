const express = require("express");

const app = express();
const port = 3000;

const { weather } = require("./public/javascript/search");
const weatherAPI = process.env.weatherAPI;

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.send("hello world");
});

app.get("/search", async function (req, res) {
  try {
    const response = await weather("Ankara", weatherAPI);
    console.log(response);
  } catch (error) {
    console.log(error);
  }
});
