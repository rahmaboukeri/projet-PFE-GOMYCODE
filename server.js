const express = require("express");
const connectDB = require("./config/connectDB");
require("dotenv").config();
const path = require('path')

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


//sever static assets if in producion
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  //set static folder
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT;

app.listen(PORT, (err) =>
  err ? console.error(err) : console.log("server is running")
);
