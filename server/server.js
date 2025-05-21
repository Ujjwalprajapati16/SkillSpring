import express from "express";
import cors from "cors";

import 'dotenv/config'
import clerkWebHooks from "./controllers/webhooks.js";
import connectDB from "./configs/mongodb.js";
import educatorRouter from './routes/educatorRoutes.js'
import {clerkMiddleware} from '@clerk/express'




//initialize express
const app = express();

//middleware
app.use(cors())
app.use(express.json());
app.use(clerkMiddleware())
//Routes
app.get("/", (req, res) => {
          res.send("Api working");
})

app.post("/clerk", clerkWebHooks)

app.use("/api/educator",educatorRouter)

//connect to the database
const startServer = async () => {
          await connectDB();

          const PORT = process.env.PORT || 5000

          app.listen(PORT, () => {
                    console.log(`server is running on ${PORT}`)
          })
}
startServer()





