const sneakerArray = [
  {
    name: "Sneaker1",
    ref: "basketball",
    sizes: ["30 inch", "32 inch", "36 inch"],
    description: "You can float around with these shoes",
    price: 32,
    category: "men"
  },
  {
    name: "Sneaker2",
    ref: "basketball",
    sizes: ["30 inch", "32 inch", "36 inch"],
    description: "You can float around with these shoes",
    price: 34,
    category: "men"
  },
  {
    name: "Sneaker3",
    ref: "basketball",
    sizes: ["30 inch", "32 inch", "36 inch"],
    description: "You can float around with these shoes",
    price: 36,
    category: "men"
  },
  {
    name: "Sneaker4",
    ref: "basketball",
    sizes: ["30 inch", "32 inch", "36 inch"],
    description: "You can float around with these shoes",
    price: 38,
    category: "men"
  },
  {
    name: "Sneaker5",
    ref: "basketball",
    sizes: ["30 inch", "32 inch", "36 inch"],
    description: "You can float around with these shoes",
    price: 40,
    category: "men"
  }
];

const mongoose = require("mongoose");
const sneakerModel = require("../models/Sneaker");

mongoose.connect("mongodb://localhost/sneaklove", {
  useNewUrlParser: true,
  useCreateIndex: true
});

sneakerModel
  .insertMany(sneakerArray)
  .then(dbVal => {
    console.log("inserted");
    mongoose.connection.close();
  })
  .catch(err => console.log(error));
