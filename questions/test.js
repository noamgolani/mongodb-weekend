import axios from "axios";

const baseUrl = "http://localhost:3000/";
const timeout = 3000;

setTimeout(async () => {
	try {
		//TEST 1
		console.log("Should GET all questions list");
		let res = await axios.get(baseUrl + "questions");
		console.log(res.status);
		console.log({ length: res.data.length, sample: res.data[0] });

		//TEST 2
		console.log("Should POST /questions - to create a question");
		res = await axios.post(baseUrl + `questions`, {
				title: "Test title",
				correctAnswer: "Correct answer test",
				answers: ["Answer 1", "Answer 2 "],
				difficulty: "4",
			},
		);
		console.log(res.status);
		console.log(res.data);
		const questionId = res.data.id;

		//TEST 3
		console.log(
			"Should PUT /questions:<id>- to update a question by its default id we got from Mongo"
		);
		res = await axios.put(baseUrl + `questions/${questionId}`, {
			title: "Test updated title",
			answers: ["Answer 3"],
			difficulty: "3",
		});
		console.log(res.status);
		console.log(res.data);
	} catch (err) {
		if (err.isAxiosError) console.log(err.message, err.response?.data.error);
		else console.log(err.message);
	}
}, timeout);
