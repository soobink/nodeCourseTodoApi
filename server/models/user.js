var mongoose = require('mongoose');

var User = mongoose.model('User',{
  name: {
    type: String,
  default: null
}, email:{
  type: String,
  required: true,
  minlength: 2,
  trim: true
}
});

module.exports = {User}
