const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionUrl = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(connectionUrl, {useNewUrlParser:true}, (err, client) => {
    if(err) return console.log(err);
    const db = client.db(databaseName);
    /* db.collection('users').insertOne({
        name:'Nrupen',
        age:31
    }) */
    /* db.collection('users').insertMany([{
        name:'Patsy',
        age:51
    },{
        name:'kanth',
        age:52
    }
], (err, res) => {
    if(err) return console.log(err);
    console.log(res.ops);
    }); */
    /* db.collection('tasks').insertMany([{
        description : 'Learn Nodejs',
        completed : false
    }, {
        description : 'Learn Microservices',
        completed : false
    }, {
        description : 'Learn Java8',
        completed : false
    }], (err, res) => {
        if (err){
            return console.log('Error in response');
        }
        console.log(res.ops);
    }) */

    db.collection('users').find({name:'Nrupen'})
    .toArray((err, res) => {
        console.log(res);
    })
    db.collection('users').find({name:'Nrupen'})
    .count((err, res) => {
        console.log(res);
    })

    // 61308f3f64ea9dbfc9746eb5

    db.collection('tasks').findOne({_id:new mongodb.ObjectId('61308f3f64ea9dbfc9746eb5')}, (err,res) => {
        console.log(res);
    })

    db.collection('tasks').find({completed:false}).toArray((err,res) => {
        console.log(res);
    })

    //update 61308f3f64ea9dbfc9746eb3
   /* db.collection('tasks').updateOne({_id: new mongodb.ObjectId('61308f3f64ea9dbfc9746eb3')}, {
        $set:{
            completed:true
        }
    })
    .then(res => console.log(res))
    .catch(err => console.log(err)); */

/*     db.collection('tasks').updateMany({completed:false}, {
        $set: {
            completed:true
        }
    }).then(res => console.log(res))
    .catch(err => console.log(err)); */

    db.collection('tasks').deleteOne({description:'Learn Nodejs'})
    .then(res => console.log(res))
    .catch(err => console.log(err));

});