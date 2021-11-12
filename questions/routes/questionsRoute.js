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
	validateId,
} from "../middlewares/validator.js";

const questionsRoute = express.Router();

questionsRoute.get("/", getAllQuestions);

questionsRoute.post("/", validateQuestion, createQuestion);

questionsRoute.put(
	"/:id",
	validateId,
	validateQuestionNonStrict,
	updateQuestion
);

questionsRoute.delete("/:id", validateId, deleteQuestion);

questionsRoute.get("/:id", validateId, getQuestionById);

questionsRoute.get("/difficulty/:difficulty", getQuestionsByDifficulty);

export default questionsRoute;
