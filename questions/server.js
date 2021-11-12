import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import mongoose from "mongoose";

import homeRoute from "./routes/homeRoute.js";
import questionsRoute from "./routes/questionsRoute.js";
import errorHandler from "./middlewares/errorHandler.js";

dotenv.config();
const { NODE_ENV, MONGO_URI } = process.env;

mongoose
	.connect(MONGO_URI)
	.then(() => {
		console.log("Connected to DB");
	})
	.catch((err) => {
		console.log(`DB connection failed: ${err}`);
	});

const app = express();

app.set('view engine','pug');

app.use(express.json());

if (NODE_ENV === "dev") app.use(morgan("tiny"));

//Routes

app.use("/questions", questionsRoute);
app.use("/", homeRoute);

app.use(errorHandler);

const port = process.env.PORT || 3000;

app.listen(port, () => {
	console.log(`Listening on ${port}`);
});
