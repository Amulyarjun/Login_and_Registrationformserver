import express from "express";
import mongoose from "mongoose";
mongoose.set("strictQuery",false);
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";

import userRoutes from "./routes/users.js";


dotenv.config();
const app = express();

dotenv.config();
app.use(cors());

app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json({limit:"30mb", extended: true}))
app.use(express.urlencoded({limit: "30mb", extended: true}))
app.use(cors());


app.get('/',(req, res) => {
 res.send("This is a stack overflow clone API")
})

app.use("/user", userRoutes);

const PORT = process.env.PORT || 5000;

const DATABASE_URL = process.env.CONNECTION_URL

mongoose.connect( DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
.catch((err) => console.log(err.message))

mongoose.connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  