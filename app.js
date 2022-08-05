const express = require("express");
const dotenv = require("dotenv");
const path = require("path");

const app = express();

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
    res.redirect("/");
  }
});

app.get("/search", async function (req, res) {
  try {
    const response = await weather(req.query.q, weatherAPI);
    res.render("show", { response });
  } catch (error) {
    res.redirect("/");
  }
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
