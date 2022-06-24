const router = require('express').Router()
const {
	getAllManagerPosts,
	getSingleManagerPost,
	createManagerPost,
	editManagerPost,
	deleteManagerPost
} = require('../controllers/managerPostController')

//GET all managers post
router.get("/manager-post", getAllManagerPosts)

//GET a single manager post
router.get("/manager-post/:id", getSingleManagerPost)

//POST a manager post
router.post("/manager-post", createManagerPost)

//EDIT a manager post
router.patch("/manager-post/:id", editManagerPost)

//DELETE a manager post
router.delete("/manager-post/:id", deleteManagerPost)

module.exports = router