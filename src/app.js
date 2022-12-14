if (process.env.USER) require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const errorHandler = require("./errors/errorHandler")
const moviesRouter = require("./movies/movies.router")
const theaterRouter = require("./theaters/theaters.router")
const reviewRouter = require("./reviews/reviews.router")
const notFound = require("./errors/notFound")

// CORS for entire app
app.use(cors());
app.use(express.json());

// Routers
app.use("/movies", moviesRouter);
app.use("/theaters", theaterRouter);
app.use("/reviews", reviewRouter);

//Error handling
app.use(notFound);
app.use(errorHandler);


module.exports = app;
