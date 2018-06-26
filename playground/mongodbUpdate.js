// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db)=>{
  if(err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5b319577a06554a73bd1f928')
  // }, {
  //   $set: {
  //     complete: true
  //   }
  // }, {
  //   returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5b31afcea06554a73bd20491')
  }, {
    $set:{
      name: 'Soobin'
    }
  }, {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });

  db.collection('Users').findOneAndUpdate({
    _id:new ObjectID('5b31afcea06554a73bd20491')
  }, {
    $inc: {
      age: 31
    }
  }, {
    returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });


//   db.close();
});
