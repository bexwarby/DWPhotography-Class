const express = require("express")
const app = express()
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const routeUrls = require("./routes/routes")
const cors = require("cors")

dotenv.config()

// DB set up using mongodb atlas
mongoose.connect(process.env.DATABASE_ACCESS, () =>
    console.log("Database connected")
)

// body parser deals with incoming and outcoming req
app.use(express.json())
app.use(cors())

// Base path
app.use("/app", routeUrls)

// Server set up:
app.listen(4000, () => console.log("server is running"))