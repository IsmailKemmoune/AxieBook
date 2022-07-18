const ScholarPost = require("../model/scholarPost")
const FeedPost = require("../model/feedPost")
const mongoose = require('mongoose')

//GET all managers post
const getAllScholarPosts = async (req, res) => {
	const page = req.query.page || 0;
	const limit = req.query.limit || 5;
	try {
		const scholarPosts = await ScholarPost.find({}).sort({createdAt: -1}).skip(page * limit).limit(limit);
		res.status(200).json(scholarPosts);
	}
	catch (error) {
		res.status(400).json({error: error.message});
	}	
}

//GET a single manager post
const getSingleScholarPost = async (req, res) => {
	try {
		const id = req.params.id;
		if(!mongoose.Types.ObjectId.isValid(id))
			return res.status(404).json({error: "No such scholar post"})
		const scholarPost = await ScholarPost.findById(id)
		if(!scholarPost)
			return res.status(404).json({error: "No such scholar post"})
		res.status(200).json(scholarPost);
	}
	catch (error) {
		res.status(400).json({error: error.message});
	}	
}

//POST a manager post
const createScholarPost = async (req, res) => {
	// console.log(req.body)
	const {
		description, 
		mmr: peakMMR,
		device,
		split: slpSplit, 
		slp: slpQuota, 
		title
	} = req.body;
	try {
		const scholarPost = await ScholarPost.create({description, peakMMR, device, slpSplit, slpQuota, title});
		res.status(200).json(scholarPost)
	} catch (error) {
		res.status(400).json({error: error.message});
	}
}

//EDIT a manager post
const editScholarPost = async (req, res) => {
	try {
		const id = req.params.id;
		if(!mongoose.Types.ObjectId.isValid(id))
			return res.status(404).json({error: "No such scholar post"})
		const scholarPost = await ScholarPost.findByIdAndUpdate({_id: id}, {...req.body})
		if(!scholarPost)
			return res.status(404).json({error: "No such scholar post"})
		res.status(200).json(scholarPost);
	}
	catch (error) {
		res.status(400).json({error: error.message});
	}	
}

//DELETE a manager post
const deleteScholarPost = async (req, res) => {
	try {
		const id = req.params.id;
		if(!mongoose.Types.ObjectId.isValid(id))
			return res.status(404).json({error: "No such scholar post"})
		const scholarPost = await ScholarPost.findOneAndDelete({_id: id})
		if(!scholarPost)
			return res.status(404).json({error: "No such scholar post"})
		res.status(200).json(scholarPost);
	}
	catch (error) {
		res.status(400).json({error: error.message});
	}	
}

module.exports = {
	getAllScholarPosts,
	getSingleScholarPost,
	createScholarPost,
	editScholarPost,
	deleteScholarPost
}