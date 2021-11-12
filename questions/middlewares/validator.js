//TODO seperate validation functions
//title() will return validated and throw an http type error
export function validateQuestion(req, res, next) {
	const { title, correctAnswer, answers, difficulty } = req.body;
	const validated = {};
	try {
		if (!title || !correctAnswer || !answers || !difficulty)
			throw { status: 400, message: "One or more params is missing" };
		if (title.trim() === "")
			throw { status: 400, message: "Must provide a title" };
		validated.title = title.trim();
		if (correctAnswer.trim() === "")
			throw { status: 400, message: "Must provide a correct answer" };
		validated.correctAnswer = title.trim();
		if (difficulty.trim() === "" || isNaN(+difficulty.trim()))
			throw { status: 400, message: "Difficulty must be a number" };
		validated.difficulty = +difficulty;
		if (!Array.isArray(answers))
			throw { status: 400, message: "Answers must be an array" };
		if (answers.length < 2)
			throw { status: 400, message: "Must provide atleast 2 answers" };
		validated.answers = [];
		for (const answer of answers) {
			if (answer.trim() === "")
				throw { status: 400, message: "One of the answers is not valid" };
			validated.answers.push(answer.trim());
		}
		req.validated = validated;
		next();
	} catch (err) {
		next(err);
	}
}

export function validateQuestionNonStrict(req, res, next) {
	const { title, correctAnswer, answers, difficulty } = req.body;
	const validated = {};
	try {
		if (title) {
			if (title.trim() === "")
				throw { status: 400, message: "Must provide a title" };
			validated.title = title.trim();
		}
		if (correctAnswer) {
			if (correctAnswer.trim() === "")
				throw { status: 400, message: "Must provide a correct answer" };
			validated.correctAnswer = title.trim();
		}
		if (difficulty) {
			if (difficulty.trim() === "" || isNaN(+difficulty.trim()))
				throw { status: 400, message: "Difficulty must be a number" };
			validated.difficulty = +difficulty;
		}
		if (answers) {
			if (!Array.isArray(answers))
				throw { status: 400, message: "Answers must be an array" };
			validated.answers = [];
			for (const answer of answers) {
				if (answer.trim() === "")
					throw { status: 400, message: "One of the answers is not valid" };
				validated.answers.push(answer.trim());
			}
		}
		req.validated = validated;
		next();
	} catch (err) {
		next(err);
	}
}
