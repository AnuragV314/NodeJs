// Part 7
// Update, Limit and Drop collection

const { error } = require('console')
let mongodb = require('mongodb')
let MongoClient = mongodb.MongoClient
let url = 'mongodb://127.0.0.1:27017'

MongoClient.connect(url)
    .then((db) => {
        console.log('connected successfully.')
        let dbobj = db.db('nodejs')
        let emp = [
            { eid: 6, ename: 'Anuja', ecity: 'Noida', esalary: 90000 },
            { eid: 7, ename: 'Anujaaa', ecity: 'Noida' },
            { eid: 8, ename: 'Anuji', ecity: 'Noida' },
            { eid: 9, ename: 'Anug', ecity: 'Noida', esalary: 90000 },
        ]
        // dbobj.collection('employees').insertMany(emp)
        // .then((result)=>{
        //     console.log(`A document was inserted with the _id: ${result.insertedIds}`)
        //     db.close()
        // })


        // updateMany() ===>
        // dbobj.collection('employees').updateOne({ ecity: 'Noida' }, {$set :{ecity: 'Lucknow'} })
        //     .then((result) => {
        //         console.log(result.modifiedCount + ' Document Updated')
        //         db.close()
        //     })

        // updateMany() ===>
        // dbobj.collection('employees').updateMany({ ecity: 'Noida' }, { $set: { ecity: 'Lucknow' } })
        //     .then((result) => {
        //         console.log(result.modifiedCount + ' Document Updated')
        //         db.close()
        //     })


        // limit() ==>
        // dbobj.collection('employees').find().limit(3).toArray()
        //     .then((result) => {
        //         console.log( result)
        //         db.close()
        //     })



        // drop() ==>
        dbobj.collection('employees').drop()
            .then((result) => {
                console.log( result)
                db.close()
            })

        // or
        // dbobj.dropCollection("employees")



        // drop database==>
        // dbobj.dropDatabase('database_Name')




    })
    .catch(error => console.log('failed to connect.', error))










