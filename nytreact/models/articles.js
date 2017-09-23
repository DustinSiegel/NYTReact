var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var articlesSchema = new Schema({
  title: {
    type: String
  },
  date: {
    type: Date
  },
  url: {
    type: String
  }
});
var Articles = mongoose.model("articles", articlesSchema);
module.exports = articles;
