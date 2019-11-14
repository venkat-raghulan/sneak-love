const express = require("express"); // import express in this module
const router = new express.Router(); // create an app sub-module (router)

//require sneaker model
const sneakerModel = require("./../models/Sneaker");
// const tagModel = require("./../models/Tag");

module.exports = router;

//public routes

// setup http://localhost:8080/sneakers/collection

router.get("/sneakers/collection", (req, res) => {
  sneakerModel
    .find()
    .then(dbRes => {
      res.render("products", { sneakers: dbRes, category: "collection" });
    })
    .catch(dbErr => console.log(dbErr));
});

// setup http://localhost:8080/sneakers/men

router.get("/sneakers/men", (req, res) => {
  sneakerModel
    .find({ category: "men" })
    .then(dbRes => {
      res.render("products", { sneakers: dbRes, category: "men" });
    })
    .catch(dbErr => console.log(dbErr));
});

// setup http://localhost:8080/sneakers/women

router.get("/sneakers/women", (req, res) => {
  sneakerModel
    .find({ category: "women" })
    .then(dbRes => {
      res.render("products", { sneakers: dbRes, category: "women" });
    })
    .catch(dbErr => console.log(dbErr));
});

// setup http://localhost:8080/sneakers/kids

router.get("/sneakers/kids", (req, res) => {
  sneakerModel
    .find({ category: "kids" })
    .then(dbRes => {
      res.render("products", { sneakers: dbRes, category: "kids" });
    })
    .catch(dbErr => console.log(dbErr));
});
