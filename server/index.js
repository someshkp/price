require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const connection = require('./db');
const userRoutes = require("./routes/users.js");
const authRoutes = require("./routes/auth.js");
const categoryRoutes = require("./routes/category.js");
const productRoutes = require("./routes/product.js");

//database connect
connection();

app.get("/",(req,res) =>{
    res.send("Server Running")
});

//middleware
app.use(express.json());
app.use(cors());



//routes
app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/category",categoryRoutes);
app.use("/api/product",productRoutes);

const port = process.env.PORT;

app.listen(port, () => console.log(`Listening to port : ${port}` ))