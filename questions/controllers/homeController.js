import Question from "../models/Question.js";

// 618e603a03f825567ede01f2
export async function home(req, res) {
	const { id } = req.params;
	if (!id) return res.render("home", { test: "qwe" });
	const question = await Question.findOne({ _id: id });
	res.render("home", { question });
}
