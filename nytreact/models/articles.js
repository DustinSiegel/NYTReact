var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var articlesSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  url: {
    type: String
    required: true
  }
});
var Articles = mongoose.model("articles", articlesSchema);
module.exports = articles;
