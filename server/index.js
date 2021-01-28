import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

//import posts routes
import postRoutes from "./routes/posts.js";

//initialize app instance
const app = express();
//enviromental variables
dotenv.config();

//set bodyparser/express
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));

//set cross origin
app.use(cors());

//set post routes prefix to posts
app.use("/posts", postRoutes);

//Greeting message for API
app.get("/", (req, res) => {
  res.send("Welcome to the Moments API");
});

// mongoose connection
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is successfully running on port: ${PORT}`)
    )
  )
  .catch((err) => console.log(err.message));

//avoid console warnings
mongoose.set("useFindAndModify", false);

//assign port number
const PORT = process.env.PORT || 5000;
