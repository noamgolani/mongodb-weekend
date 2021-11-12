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

export async function deleteQuestion(req, res, next) {
	const { id } = req.params;
	try {
		const { deletedCount } = await Question.deleteOne({ _id: id });
		res.send({ deleted: !!deletedCount });
	} catch (err) {
		next(err);
	}
}

export async function getQuestionById(req, res, next) {
	const { id } = req.params;
	try {
		const question = await Question.find({ _id: id });
		if (question.length === 0)
			throw { status: 404, message: "No Such Question" };
		else res.send(question[0]);
	} catch (err) {
		next(err);
	}
}

export async function getQuestionsByDifficulty(req, res, next) {
	const { difficulty } = req.params;
	try {
		const allQuestions = await Question.find({
			difficulty: { $gte: difficulty },
		});
		res.send(allQuestions);
	} catch (err) {
		next(err);
	}
}
