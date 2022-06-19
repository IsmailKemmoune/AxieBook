const ManagerPost = require("../model/managerPost")
const router = require('express').Router()


router.post("/manager-post", async (req, res) => {
 const {description, payment, energy, split: slpSplit, slp: slpQuota, title} = req.body;
try {
	const response = await ManagerPost.create({description, payment, energy, slpSplit, slpQuota, title});
	console.log(response);
} catch (error) {
	return  res.json({status: "error"});
}

	// console.log("req.body : ", req.body);
	res.json({status: 'ok'});
})

module.exports = router