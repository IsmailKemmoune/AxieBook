const router = require('express').Router()
const {
	getAllManagerPosts,
	getSingleManagerPost,
	createManagerPost,
	editManagerPost,
	deleteManagerPost
} = require('../controllers/managerPostController')
const {
	getAllScholarPosts,
	getSingleScholarPost,
	createScholarPost,
	editScholarPost,
	deleteScholarPost
} = require('../controllers/scholarPostController')

//------------------------

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

//------------------------

//GET all managers post
router.get("/scholar-post", getAllScholarPosts)

//GET a single manager post
router.get("/scholar-post/:id", getSingleScholarPost)

//POST a manager post
router.post("/scholar-post", createScholarPost)

//EDIT a manager post
router.patch("/scholar-post/:id", editScholarPost)

//DELETE a manager post
router.delete("/scholar-post/:id", deleteScholarPost)

module.exports = router