import Question from "../models/Question.js";

export async function getAllQuestions(req, res, next) {
	try {
		const allQuestions = await Question.find({});
		res.send(allQuestions);
	} catch (err) {
		next(err);
	}
}

export async function createQuestion(req, res, next) {}
export async function updateQuestion(req, res, next) {}
export async function deleteQuestion(req, res, next) {}
export async function getQuestionById(req, res, next) {}
export async function getQuestionsByDifficulty(req, res, next) {}
