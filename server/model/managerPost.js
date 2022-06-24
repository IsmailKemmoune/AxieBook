const mongoose = require('mongoose');
const { Schema } = mongoose;

//creating schema
const managerPost = new Schema({	
  manager:  String,
  axies: [{
    id: String, 
    image: String,
    class: String,
    parts: {
      eyes: String,
      ears: String,
      back: String,
      mouth: String,
      horn: String,
      tail: String,
    },
    abilities: {
      back: String,
      mouth: String,
      horn: String,
      tail: String,
    },
    stats: {
      hp: Number,
      speed: Number,
      skill: Number,
      morale: Number,
    }
  }],
  title: String, 
  slpQuota: Number,
  slpSplit:   Number,
  payment: Number,
  energy: Number,
  description: String,
}, { collection: "manager-post", timestamps: true});

//creating model 
const ManagerPost = mongoose.model("ManagerPost", managerPost);

module.exports = ManagerPost;

