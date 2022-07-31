const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();
const port = 3000;

const { weather } = require("./public/javascript/search");

dotenv.config({ path: ".env" });
const weatherAPI = process.env.weatherAPI;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", async function (req, res) {
  try {
    const response = await weather("Toronto", weatherAPI);
    res.render("show", { response });
  } catch (error) {
    console.log(error);
  }
});

app.get("/search", async function (req, res) {
  try {
    const response = await weather("bingol", weatherAPI);
    res.render("show", { response });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
