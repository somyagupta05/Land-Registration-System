const mongoose = require("mongoose");

const landSchema = new mongoose.Schema(
  {
    orderNo: {
      type: Number,
      required: true,
      unique: true,
    },
    ownerName: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      enum: ["Agricultural", "Residential", "Commercial"],
      required: true,
    },
    surveyNumber: {
      type: String,
      required: true,
      unique: true,
    },
    registrationNumber: {
      type: String,
      required: true,
      unique: true,
    },
    expectedPriceInETH: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String, // URL or image path
      required: false,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Land", landSchema);
