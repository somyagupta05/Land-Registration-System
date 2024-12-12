const mongoose = require("mongoose");
const connectDB = require("../db/connection");
// const Land = require("../models/land");
const landData = require("../data/landData");

const seedDatabase = async () => {
  await connectDB();

  try {
    // Clear the collection before inserting
    await Land.deleteMany();
    console.log("Existing records cleared.");

    // Insert new data
    await Land.insertMany(landData);
    console.log("Land records added successfully.");
  } catch (err) {
    console.error("Error inserting data:", err.message);
  } finally {
    mongoose.connection.close();
  }
};

seedDatabase();
