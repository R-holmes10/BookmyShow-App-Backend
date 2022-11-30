const mongodb = require("mongodb");

const mongoURI = "mongodb://0.0.0.0:27017/" + "bookMovie";
const dotenv = require("dotenv");
dotenv.config();

let mongoose = require("mongoose");
const { bookMovieSchema } = require("../models/bookMovie");
const { UserSchema } = require('../models/user')

mongoose
  .connect(process.env.mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("connection established with mongodb server online");
  })
  .catch((err) => {
    console.log("error while connection", err);
  });
let collection_connection = mongoose.model("bookmovietickets", bookMovieSchema);
let user_connection = mongoose.model("User", UserSchema);

exports.connection = collection_connection;
exports.Userconnection = user_connection;

//2jldcFIugVIXUpZe
//RT-Sherlockholmes
//mongodb+srv://<username>:<password>@cluster0.mgtnz8t.mongodb.net/?retryWrites=true&w=majority