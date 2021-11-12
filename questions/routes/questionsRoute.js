import express from "express";

import {
	getAllQuestions,
	createQuestion,
	updateQuestion,
	deleteQuestion,
	getQuestionById,
	getQuestionsByDifficulty,
} from "../controllers/questionsController.js";

import {
	validateQuestion,
	validateQuestionNonStrict,
} from "../middlewares/validator.js";

const questionsRoute = express.Router();

questionsRoute.get("/", getAllQuestions);
questionsRoute.post("/", validateQuestion, createQuestion);
questionsRoute.put("/:id", validateQuestionNonStrict, updateQuestion);
questionsRoute.delete("/:id", deleteQuestion);
questionsRoute.get("/:id", getQuestionById);
questionsRoute.get("/difficulty:difficulty", getQuestionsByDifficulty);

export default questionsRoute;
