// Part 6
// Find, Filter, sort,and Delete Documents

let mongodb = require('mongodb')
let MongoClient = mongodb.MongoClient
let url = 'mongodb://127.0.0.1:27017'

MongoClient.connect(url)
    .then((db) => {
        console.log('Connected Successfully!');
    })
    .catch(error => console.log('Failed to connect', error))












