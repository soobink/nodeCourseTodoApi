const {ObjectID} = require('mongodb');

var express = require ('express');
var bodyParser = require('body-parser');

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
  })
});

//GET /todos/dfadsfs (v 78)
app.get('/todos/:id', (req,res)=>{
  //validate id using isValid
    //404 -send back empty
  var id = req.params.id;
  if(!ObjectID.isValid(id)){
    console.log('Id is not valid');
    return res.status(400).send('Id is not valid - 400', 400);
    }
//findById
  //success
    //if todo - send it back
    //if no todo - send back 404 with empty body
  Todo.findById(id).then((todo)=>{
    if(!todo){
      console.log('Id not found.');
      return res.status(404).send('Id not found - 404', 404);
    } else{
        console.log('todo\n', todo);
        res.send({todo});
    }
  }).catch((e)=>{
    res.status(400).send();
  });
});
    //error
      //400 - send back empty body back


app.listen(port, ()=>{
  console.log(`Started up at port ${port}`);
});

module.exports = {app};
