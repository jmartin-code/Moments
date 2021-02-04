import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";

//import posts routes
import postRoutes from "./routes/posts.js";
import userRoutes from "./routes/users.js";

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
//set user routes
app.use("/users", userRoutes);

//Greeting message for API
app.get("/", (req, res) => {
  res.send("Welcome to the Moments API");
});

//assign port number from env variables
const PORT = process.env.PORT || 5000;

// mongoose connection
mongoose
  .connect(process.env.CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server is successfully running on port: ${PORT}`)
    )
  )
  .catch((err) => console.log(err));

mongoose.connection
  .once("open", function () {
    console.log("DB Connected!");
  })
  .on("error", function (error) {
    console.log("Error is: ", error);
  });

//avoid console warnings
// mongoose.set("useFindAndModify", false);
