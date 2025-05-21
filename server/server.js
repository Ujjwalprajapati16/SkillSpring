import express from "express";
import cors from "cors";
<<<<<<< HEAD
import 'dotenv/config'
import { clerkWebHooks } from "./controllers/webhooks.js";
import connectDB from "./configs/mongodb.js";

=======
import "dotenv/config";
import connectDB from "./configs/mongodb.js";
import clerkWebhooks from "./controllers/webhooks.js";
import homeRoute from "./routes/HomeRoute.js";
>>>>>>> e08fc343073813500ec08a62d326ced89fc964a1

//initialize express
const app = express();

//middleware
<<<<<<< HEAD
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
=======
app.use(cors());

app.use("/", homeRoute);

app.post("/clerk", express.json(), clerkWebhooks);

//connect to the database
await connectDB();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
>>>>>>> e08fc343073813500ec08a62d326ced89fc964a1
