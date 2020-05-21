const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/adidas-related-info", () => {
  console.log(`MongoDB is connected... at mongodb://localhost:27017`)
});