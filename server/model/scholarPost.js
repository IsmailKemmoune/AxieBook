const mongoose = require('mongoose');
const { Schema } = mongoose;

//creating schema
const scholarPost = new Schema({	
  scholar:  String,
  title: String, 
  peakMMR: Number,
  slpQuota: Number,
  slpSplit:   Number,
  device: String,
  description: String,
}, { collection: "scholar-post", timestamps: true});

//creating model 
const ScholarPost = mongoose.model("ScholarPost", scholarPost);

module.exports = ScholarPost;

