import express from "express";
import db from "../config/dbconfig.js";
import { router } from "./router/index.js";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

db.sync()
    .then(() => console.log("Database connected"))
    .catch((err) => console.log(err));

app.use(express.json());
app.use(cors());

app.use('/', router);

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
});