import mongoose from "mongoose";

const questionSchema = mongoose.Schema({
	title: String,
	connectAnswer: String,
	answers: [String],
	difficulty: Number,
});

questionSchema.set("toJSON", {
	transform: (_, returnedObject) => {
		returnedObject.id = returnedObject._id.toString();
		delete returnedObject._id;
	},
});

export default mongoose.model("Question", questionSchema);
