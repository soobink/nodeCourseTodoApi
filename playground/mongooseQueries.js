// const{ObjectID} = require('mongodb');
//
// const {mongoose} = require('./../server/db/mongoose');
// const {Todo} = require('./../server/models/todo');

// var id = '5b342e23ccde4b506e079878aa';
//
// if(!ObjectID.isValid(id)){
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos)=>{
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo)=>{
//   console.log('Todo', todo);
// });

// Todo.findById(id).then((todo)=>{
//   if(!todo){
//     return console.log('ID not found');
//   }
//   console.log('Todo by Id', todo);
// }).catch((e)=>{
//   console.log(e)
// });

//user.findById 1)user not found 2) user detail 3)error
const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {User}   = require('./../server/models/user');

id = '5b32e0de9691b24c36353e87';
if(!ObjectID.isValid(id)){
  console.log('id not valid');
}

User.findById(id).then((userdoc)=>{
  if(!userdoc){
    return console.log('id not found.');
  }
  console.log('user', JSON.stringify(userdoc, undefined, 2));
}).catch((e)=>{
  console.log(e);
})
