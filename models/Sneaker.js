const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const sneakerSchema = new Schema({
  name: String,
  ref: String,
  sizes: Array,
  image: { type: String, default: "../medias/img/shoe.png" },
  description: String,
  price: Number,
  category: {
    type: String,
    enum: ["men", "women", "kids"]
  },
  id_tags: [{ type: Schema.Types.ObjectId }]
});

const sneakerModel = mongoose.model("Sneaker", sneakerSchema);

module.exports = sneakerModel;
