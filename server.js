const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config();

const app = express();

connectDB();
// middleware global
app.use(express.json());
// router
app.use("/api/user", require("./router/user"));

// app.use("/api/category", require("./router/category"));
const routesproduct = require("./router/product")
app.use('/api/product',routesproduct)

const routescateg = require("./router/category")
app.use('/api/category/',routescateg)

const routesorder = require("./router/order")
app.use('/api/order/',routesorder)


const PORT = process.env.PORT;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("server is running")
);
