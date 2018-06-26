// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// var user = {name:'Hugo', age: 5};
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err, result) => {
  //   if(err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops))
  // });

  //insert new doc into Users (name, age, location string)



  db.collection('Users').insertOne({
    name: 'Soobin',
    age: 33,
    location: 'Brisbane',
    //completed: false
  }, (err, result)=>{
    if(err){
      return console.log('Unable to insert todo', err);
    }
    //console.log(JSON.stringify(result.ops))
    console.log(result.ops[0]._id.getTimestamp());
  });

  db.close();
});
