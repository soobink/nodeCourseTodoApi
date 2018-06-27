var mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');
//mongoose.connect('mongodb://localhost:3000/TodoApp');
module.exports = {
  mongoose
  //mongoose: mongoose
};
