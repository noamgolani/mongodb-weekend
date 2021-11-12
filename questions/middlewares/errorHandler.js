export default function errorHandler(err, req, res, next) {
	if (err.status) {
		res.status(err.status);
		res.send(err.message);
	} else {
		console.log(err);
		res.status(500);
		res.send("Internal Server Error");
	}
}
