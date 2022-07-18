const ManagerPost = require("../model/managerPost")
// const ScholarPost = require("../model/scholarPost")
// const mongoose = require('mongoose')

//GET all feed posts
const getAllFeedPosts = async (req, res) => {
	const page = req.query.page || 0;
	const limit = req.query.limit || 5;
	try {
		const feedPosts = await ManagerPost.aggregate ([
			{
				$unionWith: { coll: "scholar-post" }
			 },
			{
				$sort: { createdAt: -1 }
			 },
			{
				$skip: page * limit
			 },
			{
				$limit: 3
			 },
		])
		res.status(200).json(feedPosts);
	}
	catch (error) {
		res.status(400).json({error: error.message});
	}	
}

module.exports = {
	getAllFeedPosts,
}