const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./Routes/userRoutes")
const studentRoutes = require("./Routes/studentRoutes")
const connectDB = require("./config/db");
dotenv.config()

const PORT = process.env.PORT || 5000;
connectDB()

const app = express();

// app.get('/', (req, res) => {
//     res.send("Api is running");

// })
app.use(express.json())
app.use('/api/user', userRoutes)
app.use('/api/studentdata', studentRoutes)



app.listen(5000, console.log(`Server Started on PORT ${PORT}`));