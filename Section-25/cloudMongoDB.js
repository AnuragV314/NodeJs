const { error } = require('console')
let mongoose = require('mongoose')
let url = 'mongodb+srv://vermagup01:anurag012@cluster0.v5qhisr.mongodb.net/nodejs?retryWrites=true&w=majority'

mongoose.connect(url)
    .then(() => {
        console.log('Connected!')
    })
    .catch(error => console.log(error))

let employeeSchema = mongoose.Schema({
    ename: String,
    ecity: String,
    esalary: Number,
})

let Employee = mongoose.model('Employee', employeeSchema, 'employees')

// insert one document=====>
let employee1 = new Employee({ ename: "Anu Priya", ecity: 'Jaunpur', esalary: 150000 })
// employee1.save()
//     .then((docs) => {
//         console.log(`${docs.ename} document inserted successfully in collection employees.`)
//         mongoose.connection.close()
//     })
//     .catch(error => console.log(error))


// insert many document=====>
let emps = [
    { ename: 'Anuj', ecity: 'Lucknow', esalary: 120000 },
    { ename: 'Anuja', ecity: 'Lucknow', esalary: 150000 },
    { ename: 'Anuji', ecity: 'Lucknow', esalary: 140000 },
    { ename: 'Anuki', ecity: 'Lucknow', esalary: 130000 },
]

Employee.insertMany(emps)
    .then((docs) => {
        console.log(`${docs.insertCount} document inserted successfully in collection employees.`)
        mongoose.connection.close()
    })
    .catch(error => console.log(error))

    
