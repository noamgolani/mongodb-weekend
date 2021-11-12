export default function errorHandler(err, req, res, next) {
	if (err.status) {
		res.status(err.status);
		res.send({ error: err.message });
	} else {
		console.log(err);
		res.status(500);
		res.send({ error: "Internal Server Error" });
	}
}
