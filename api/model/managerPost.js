const mongoose = require('mongoose');
const { Schema } = mongoose;

//creating schema
const managerPost = new Schema({	
  manager:  String, // String is shorthand for {type: String}
  firstAxie:  String, 
  secondAxie:  String, 
  thirdAxie:  String, 
  title: String, 
  slpQuota: Number,
  slpSplit:   Number,
  payment: Number,
  energy: Number,
  description: String,
  created: {type: Date, default: Date.now},
  updated: Date,
  deleted: Date,
}, { collection: "manager-post"});

//creating model 
const ManagerPost = mongoose.model("ManagerPost", managerPost);


module.exports = ManagerPost;

