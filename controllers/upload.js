module.exports = {
	upload : (req, res) => {
		let finalResult = {
			data: req.files,
			success:true
		}
		console.log(req.files);
		res.json(finalResult)
	}
}
