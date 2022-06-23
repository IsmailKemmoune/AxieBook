const ManagerPost = require("../model/managerPost")
const router = require('express').Router()

//GET all managers post
router.get("/manager-post", async(req, res) => {
	res.send("get all posts");
})

//GET 1 manager post
router.get("/manager-post/:id", async(req, res) => {
	const id = req.params.id;
	console.log(id);
	res.send(`get post : ${id}`);
})

//POST a manager post
router.post("/manager-post", async (req, res) => {
 const {description, payment, energy, split: slpSplit, slp: slpQuota, title} = req.body;
try {
	const managerPost = await ManagerPost.create({description, payment, energy, slpSplit, slpQuota, title});
	res.status(200).json(managerPost)
} catch (error) {
	res.status(400).json({error: error.message});
}
})

//EDIT a manager post
router.put("/manager-post/:id", async(req, res) => {
	const id = req.params.id;
	res.send(`update post : ${id} `);
})

//DELETE a manager post
router.delete("/manager-post/:id", async(req, res) => {
	const id = req.params.id;
	res.send(`delete post : ${id}`);
})

module.exports = router