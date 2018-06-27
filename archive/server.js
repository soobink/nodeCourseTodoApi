var {mongoose} = require('./db/mongoose');

const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed:{
//     type: Boolean,
//     default: false
//   },
//   completedAt:{
//     type: Number,
//     default: null
//   }
// });

// var newTodo = new Todo({
//   text: 'Node JS - Chap 7'
// })
//
// newTodo.save().then((doc)=>{
//   console.log('Saved todo', doc);
// }, (e)=>{
//   console.log('Unable to save todo')
// });

// var newTodo1 = new Todo({
//   text: '    read a book! '
//   // text: 'K&R C - chap 1',
//   // completed: false,
//   // completedAt: 123
//   //completedAt: new Date().getTime()
// })
//
// newTodo1.save().then((doc)=>{
//   console.log('Saved todo!\n', JSON.stringify(doc, undefined, 2));
// }, (e)=>{
//   console.log('Unable to save todo', e);
// });


//User
//email -req, trim, type-string, min length of 1

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

var user1 = new User({
  name:'Hugo',
  email:'  Hugo.kang@plover.com.au    '
});

user1.save().then((doc)=>{
  console.log("Saved the user\n", JSON.stringify(doc, undefined, 2));
}, (e)=>{
  console.log('Unable to save the user', e)
});
