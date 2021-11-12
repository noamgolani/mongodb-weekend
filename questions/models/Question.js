import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
	title: String,
	connectAnswer: String,
	answers: [String],
	difficulty: Number
});

export default mongoose.model("Question", questionSchema);
