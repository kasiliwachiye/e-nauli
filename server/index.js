import express from "express";
import bp from "body-parser";
import mongoose from "mongoose"
import cors from "cors";
import dotenv from "dotenv"

// SETUP
const app = express();

dotenv.config();

const corsOptions = {
  origin: "*",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};

mongoose
  .connect(process.env.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Successfully connected to MongoDB`))
  .catch((err) => console.error(err));

// MIDDLEWARE
// app.use(express.json());
app.use(bp.urlencoded({ extended: true }));
app.use(bp.json());
app.use(cors(corsOptions));

// ROUTES
// app.use("/api/posts", posts);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => console.log(`App is listening on port ${PORT}`));