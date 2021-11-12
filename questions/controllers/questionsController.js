import Question from '../models/Question.js';

export async function getAllQuestions(req, res, next) {
	try {
		const allQuestions = await Question.find({});
		res.send(allQuestions);
	} catch (err) {
		next(err);
	}
}
