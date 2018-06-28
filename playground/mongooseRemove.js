const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User}   = require('./../server/models/user');
const {Todo}  = require('./../server/models/todo');

// //Todo.remove({}).then()
// Todo.remove({}).then((result)=>{
//   console.log(result);
// });

//Todo.findOneAndRemove
//Todo.findByIdAndRemove

Todo.findOneAndRemove({_id: '5b3453afce084403a23c0cbf'}).then((todo)=>{
  console.log(todo);
});

Todo.findByIdAndRemove('5b3453afce084403a23c0cbf').then((todo) =>{
  console.log(todo);
});
