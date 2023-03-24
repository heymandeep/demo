const express = require("express")
const connectDB = require("./config/db")
var books = require("./routes/api/books")
const routes = require("./routes/api/books")

const app = express()

connectDB().then(() => {
    console.log("Connected to mongodb")
});

app.use(cors({ origin:true , credentials:true }))

app.use(express.json({ extended: false }));

app.use("/", routes)
app.use("/api/books", books)

require("dotenv").config({path:"./config.env" }) 
const port = process.env.PORT || 5000
app.listen(port, ()=> console.log(`Server running on port ${port}`));

app.use("/", routes)
