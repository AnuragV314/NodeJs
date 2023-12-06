// Part 4
// Connection Establishing between MOngoDB with Node.js


const { error } = require('console');
let mongodb = require('mongodb');

let MongoClient = mongodb.MongoClient

let url = 'mongodb://127.0.0.1:27017'

MongoClient.connect(url)
    .then((db) => {
        console.log('Connected Successfully')
        let dbo = db.db('nodejs')

        // create a collection====>
        // dbo.createCollection("employees")
        //     .then(()=>console.log("employees collection created successfully"))
        //     .catch(error=>console.log(error))

        // drop a collection====>
        // dbo.collection('employees').drop()
        //     .then(()=>console.log('employee collection dropped sucessfully!'))

              
    })
    .catch(error => console.log('Failed to connect', error))


