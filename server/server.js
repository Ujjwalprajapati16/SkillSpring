import express from "express";
import cors from "cors";
import 'dotenv/config'
import connectDB from "./configs/mongodb.js";
import clerkWebhooks from "./controllers/webhooks.js";

//initialize express
const app = express()

//middleware
app.use(cors())


app.get("/", (req, res) => {
          res.send("Api working");
})

app.post("/clerk",express.json(),clerkWebhooks)

//connect to the database
await connectDB()

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
          console.log(`server is running on ${PORT}`)
})


