// Part 5
// Inserting Documents into collection

const { error } = require('console');
let mongodb = require('mongodb')
let MongoClient = mongodb.MongoClient
let url = 'mongodb://127.0.0.1:27017'

MongoClient.connect(url)
    .then((db) => {
        console.log('Connected Successfully!')
        let dbobj = db.db('nodejs')
        let emp1 = {
            eid: 5,
            ename: 'Anuj',
            ecity: 'Lucknow'
        }

        let employees = [
            {eid:6, ename:'Anuja', ecity:'Noida', esalary:90000},
            {eid:7, ename:'Anujaaa', ecity:'Noida'},
            {eid:8, ename:'Anuji', ecity:'Noida'},
            {eid:9, ename:'Anug', ecity:'Noida',esalary:90000},
        ]
        dbobj.collection('employees').insertMany(employees)
            .then((result)=>console.log(`A document was inserted with the _id: ${result.insertedIds}`))
        
    
    })
    .catch(error => console.log('Failed to connect', error))



    






