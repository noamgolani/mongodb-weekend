import express from "express";

import { getAllQuestions } from "../controllers/questionsController.js";

const questionsRoute = express.Router();

questionsRoute.get("/", getAllQuestions);

export default questionsRoute;
