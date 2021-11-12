import Question from "../models/Question.js";

export async function getAllQuestions(req, res, next) {
	try {
		const allQuestions = await Question.find({});
		res.send(allQuestions);
	} catch (err) {
		next(err);
	}
}

export async function createQuestion(req, res, next) {
	const { validated } = req;
	try {
		const newQuestion = await Question.create(validated);
		res.send(newQuestion);
	} catch (err) {
		next(err);
	}
}

export async function updateQuestion(req, res, next) {
	const {
		validated,
		params: { id },
	} = req;
	try {
		const { acknowledged } = await Question.updateOne({ _id: id }, validated);
		res.send({ acknowledged });
	} catch (err) {
		next(err);
	}
}
export async function deleteQuestion(req, res, next) {}
export async function getQuestionById(req, res, next) {}
export async function getQuestionsByDifficulty(req, res, next) {}
