import express from "express";
import cors from "cors";
import 'dotenv/config'
import { clerkWebHooks } from "./controllers/webhooks.js";
import connectDB from "./configs/mongodb.js";


//initialize express
const app = express()

//middleware
app.use(cors())
app.use(express.json());

app.get("/", (req, res) => {
          res.send("Api working");
})

app.post("/clerk",clerkWebHooks)

//connect to the database
const startServer = async () => {
          await connectDB();

          const PORT = process.env.PORT || 5000

          app.listen(PORT, () => {
                    console.log(`server is running on ${PORT}`)
          })
}
startServer()
