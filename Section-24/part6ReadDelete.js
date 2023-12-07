// Part 6
// Find, Filter, sort,and Delete Documents
// https://www.mongodb.com/docs/drivers/node/current/fundamentals/crud/read-operations/retrieve/



let mongodb = require('mongodb');
const { clearScreenDown } = require('readline');
let MongoClient = mongodb.MongoClient
let url = 'mongodb://127.0.0.1:27017'

MongoClient.connect(url)
    .then((db) => {
        console.log('Connected Successfully!');
        let dbobj = db.db('nodejs')

        // findOne()===>
        // dbobj.collection('employees').findOne({},{_id:0})
        // .then((result)=>{
        //     console.log(result)
        //     db.close()
        // })

        // find()===>Projection{}or filter
        // dbobj.collection('employees').find({}, {projection:{ecity:0}}).toArray()
        // .then((result)=>{
        //     // console.log(result)
        //     for(emp of result){
        //         console.log(emp._id);
        //         console.log(emp.eid);
        //         console.log(emp.ename);
        //         console.log(emp.ecity);
        //         console.log('*********************************************');
        //     }
        //     db.close()
        // })

        // sort(1/-1) ===> use -1 or 1
        // dbobj.collection('employees').find({}).sort({ename:1}).toArray()
        // .then((result)=>{
        //     console.log(result)
        //     db.close()
        // })


        // deleteOne() ===>
        // dbobj.collection('employees').deleteOne({})
        // .then((result)=>{
        //     console.log(result.deletedCount, 'Document deleted');

        //     db.close()
        // })

        // deleteMany() ====>
        dbobj.collection('employees').deleteMany({ecity:'Lucknow'})
        .then((result)=>{
            console.log(result.deletedCount, 'Document deleted');
            db.close()
        })
        

    })
    .catch(error => console.log('Failed to connect', error))












