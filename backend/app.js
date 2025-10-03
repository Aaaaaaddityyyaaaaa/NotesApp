const express = require("express")
const routes = require("./src/routes")
const cors = require("cors")
const connectDB = require("./src/config/db")
const rateLimiter = require("./src/middleware/rateLimiter")
const app = express()
app.use(express.json())
app.use(cors());
app.use(rateLimiter)
app.use("/api/notes" , routes)

connectDB()
.then(app.listen(5000))
