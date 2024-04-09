const mongoose = require("mongoose");

const randomNumberSchema = new mongoose.Schema({
  userName: {
    required: true,
    type: String,
  },
  randomNumber: {
    required: true,
    type: Number,
  },
});

module.exports = mongoose.model("RandomNumberData", randomNumberSchema);
