import express from "express";
import cors from "cors";
import userRouter from "./routes/userRouter.js";
import saucesRouter from "./routes/saucesRouter.js";
import "./config/db.js";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.SERVER_PORT || 3001;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/auth", userRouter);
app.use("/api/sauces", saucesRouter);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
