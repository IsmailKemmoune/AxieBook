const ManagerPost = require("../model/managerPost")
const router = require('express').Router()


router.post("/manager-post", async (req, res) => {
 const {description, payment, energy, split: slpSplit, slp: slpQuota, title} = req.body;
try {
	const managerPost = await ManagerPost.create({description, payment, energy, slpSplit, slpQuota, title});
	res.status(200).json(managerPost)
} catch (error) {
	res.status(400).json({error: error.message});
}
})

module.exports = router