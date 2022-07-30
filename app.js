const express = require("express");
const dotenv = require("dotenv");

const app = express();
const port = 3000;

const { weather } = require("./public/javascript/search");

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

dotenv.config({ path: ".env" });
const weatherAPI = process.env.weatherAPI;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(__dirname + "public"));

app.get("/", (req, res) => {
  res.render("show");
});

app.get("/search", async function (req, res) {
  try {
    const response = await weather("ankara", weatherAPI);
    console.log(response.data.name);
  } catch (error) {
    console.log(error);
  }
});
