import axios from "axios";

const baseUrl = "http://localhost:3000/";
const timeout = 3000;

setTimeout(async () => {
	console.log("Should GET all questions list");

	try {
		const res = await axios.get(baseUrl + "questions");
		console.log(res.status);
		console.log(res.data);
	} catch (err) {
		if (err.isAxiosError) console.log(err.message, err.response?.data.error);
		else console.log(err.message);
	}
}, timeout);
