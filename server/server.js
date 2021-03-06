const _ = require('lodash');
const {ObjectID} = require('mongodb');
const express = require ('express');
const bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  //console.log(req.body);
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  })
});

app.get('/todos', (req,res)=>{
  Todo.find().then((todos)=>{
    res.send({todos});
  }, (e) =>{
    res.status(400).send(e);
  });
});

app.get('/todos/:id',(req,res)=>{
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    return res.status(404).send();
  }
  Todo.findById(id).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  });
});

//GET /todos/dfadsfs (v 78)
// app.get('/todos/:id', (req,res)=>{
//   //validate id using isValid
//     //404 -send back empty
//   var id = req.params.id;
//   if(!ObjectID.isValid(id)){
//     console.log('Id is not valid');
//     return res.status(400).send('Id is not valid - 400', 400);
//     }
// //findById
//   //success
//     //if todo - send it back
//     //if no todo - send back 404 with empty body
//   Todo.findById(id).then((todo)=>{
//     if(!todo){
//       console.log('Id not found.');
//       return res.status(404).send('Id not found - 404', 404);
//     } else{
//         console.log('todo\n', todo);
//         res.send({todo});
//     }
//   }).catch((e)=>{
//     res.status(400).send();
//   });
// });
    //error
      //400 - send back empty body back

app.delete('/todos/:id', (req, res)=>{
  //get the id
  var id = req.params.id;
  //validate id =>not valid-> 404
  if(!ObjectID.isValid(id)){
    console.log('Id is not valid');
    return res.status(404).send('id is not valid - 404');
  }
  Todo.findByIdAndRemove(id).then((todo)=>{
    if(!todo){
      console.log('Id not found');
      return res.status(404).send('Id not found -404');
    } else {
      console.log('remove!', todo);
      res.send({todo});
    }
  }).catch((e)=>{
    res.status(400).send();
  });
});

  //remove todo by id
    //success
      //if no doc, send 404
      //if doc, send back with 200
    //error
      //400 with empty body

app.patch('/todos/:id', (req,res)=>{
  var id = req.params.id;
  var body =_.pick(req.body, ['text', 'completed']);

  if(!ObjectID.isValid(id)) {
    return res.status(404).send();
  }

  if(_.isBoolean(body.completed) && body.completed) {
    body.completedAt = new Date().getTime();
  } else{
    body.completedAt = false;
    body.completedAt = null;
  }

  Todo.findByIdAndUpdate(id, {$set: body}, {new: true}).then((todo)=>{
    if(!todo){
      return res.status(404).send();
    }
    res.send({todo});
  }).catch((e)=>{
    res.status(400).send();
  })
});

app.listen(port, ()=>{
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
