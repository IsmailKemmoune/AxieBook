const ManagerPost = require("../model/managerPost")
const mongoose = require('mongoose')

//GET all managers post
const getAllManagerPosts = async (req, res) => {
	const page = req.query.page || 0;
	const limit = req.query.limit || 5;
	try {
		const managerPosts = await ManagerPost.find({}).sort({createdAt: -1}).skip(page * limit).limit(limit);
		res.status(200).json(managerPosts);
	}
	catch (error) {
		res.status(400).json({error: error.message});
	}	
}

//GET a single manager post
const getSingleManagerPost = async (req, res) => {
	try {
		const id = req.params.id;
		if(!mongoose.Types.ObjectId.isValid(id))
			return res.status(404).json({error: "No such manager post"})
		const managerPost = await ManagerPost.findById(id)
		if(!managerPost)
			return res.status(404).json({error: "No such manager post"})
		res.status(200).json(managerPost);
	}
	catch (error) {
		res.status(400).json({error: error.message});
	}	
}

//POST a manager post
const createManagerPost = async (req, res) => {
	// console.log(req.body)
	const {
		axies,
		description, 
		payment, 
		energy, 
		split: slpSplit, 
		slp: slpQuota, 
		title
	} = req.body;
	try {
		const managerPost = await ManagerPost.create({axies, description, payment, energy, slpSplit, slpQuota, title});
		res.status(200).json(managerPost)
	} catch (error) {
		res.status(400).json({error: error.message});
	}
}

//EDIT a manager post
const editManagerPost = async (req, res) => {
	try {
		const id = req.params.id;
		if(!mongoose.Types.ObjectId.isValid(id))
			return res.status(404).json({error: "No such manager post"})
		const managerPost = await ManagerPost.findByIdAndUpdate({_id: id}, {...req.body})
		if(!managerPost)
			return res.status(404).json({error: "No such manager post"})
		res.status(200).json(managerPost);
	}
	catch (error) {
		res.status(400).json({error: error.message});
	}	
}

//DELETE a manager post
const deleteManagerPost = async (req, res) => {
	try {
		const id = req.params.id;
		if(!mongoose.Types.ObjectId.isValid(id))
			return res.status(404).json({error: "No such manager post"})
		const managerPost = await ManagerPost.findOneAndDelete({_id: id})
		if(!managerPost)
			return res.status(404).json({error: "No such manager post"})
		res.status(200).json(managerPost);
	}
	catch (error) {
		res.status(400).json({error: error.message});
	}	
}

module.exports = {
	getAllManagerPosts,
	getSingleManagerPost,
	createManagerPost,
	editManagerPost,
	deleteManagerPost
}