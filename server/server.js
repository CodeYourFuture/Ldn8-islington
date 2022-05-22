const express = require("express");
const app = express();
const harrow = require("../data/Harrow.json");
const heathrow = require("../data/Heathrow.json");
const stratford = require("../data/Stratford.json");

const allCities = { harrow, heathrow, stratford };

app.get("/pharmacies", (req, res) => {
  res.send(stratford.doctors);
});

app.get("/colleges", (req, res) => {
  res.send(stratford.colleges);
});

app.get("/doctors", (req, res) => {
  res.send(stratford.doctors);
});

app.get("/hospitals", (req, res) => {
  res.send(stratford.hospitals);
});

app.get("/:city/pharmacies", (req, res) => {
  //res.send(req.params.city.pharmacies);
  const city = req.params.city;
  //   console.log(city);
  res.send(allCities[city].pharmacies);
});

app.get("/:city/colleges", (req, res) => {
  const city = req.params.city;
  res.send(allCities[city].colleges);
});

app.get("/:city/doctors", (req, res) => {
  const city = req.params.city;
  res.send(allCities[city].doctors);
});

app.get("/:city/hospitals", (req, res) => {
  const city = req.params.city;
  res.send(allCities[city].hospitals);
});

app.get("/*", (req, res, next) => {
  res.redirect("/")
})


// test 

app.listen(5000, () => {
  console.log("App listening on port:5000");
});
