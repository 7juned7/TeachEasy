const express = require("express");
const dotenv = require("dotenv");
const userRoutes = require("./Routes/userRoutes")
const studentRoutes = require("./Routes/studentRoutes")
const connectDB = require("./config/db");
const path = require("path");
dotenv.config()

const PORT = process.env.PORT || 5000;
connectDB()

const app = express();


app.use(express.json())

app.use('/api/user', userRoutes)
app.use('/api/studentdata', studentRoutes)

// --------deployement-----------

const __dirname1 = path.resolve();
if (process.env.NODE_ENV == "development") {
    app.use(express.static(path.join(__dirname1, "/frontend/build", "index.html")));
    app.get('*', (req, res) => {
        res.send("API is running")
    });
} else {
    app.get('/', (req, res) => {
        res.send("Api is running");

    })
}





app.listen(5000, console.log(`Server Started on PORT ${PORT}`));