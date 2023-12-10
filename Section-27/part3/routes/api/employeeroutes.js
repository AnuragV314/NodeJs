let express = require('express')
let router = express.Router()
let employees = require('../../employees')

let uuid = require('uuid')

let mongoose = require('mongoose')
const url = 'mongodb+srv://vermagup01:anurag012@cluster0.v5qhisr.mongodb.net/nodejs?retryWrites=true&w=majority'

mongoose.connect(url)
    .then(() => console.log('Connected'))
    .catch(error => console.log('Failed to connect: ', error))

let employeesSchema = mongoose.Schema({
    eid: String,
    ename: String,
    ecity: String
})

let Employee = mongoose.model('Employee', employeesSchema, 'employees')


router.get('/', (req, res) => res.json(employees))

router.post('/', (req, res) => {
    console.log(req.body)

    let newEmployee = {
        eid: uuid.v4(),
        ename: req.body.ename,
        ecity: req.body.ecity
    }

    if (newEmployee.ename != null && newEmployee.ecity != null) {
        // mongodb===
        let emp = new Employee(newEmployee)
        emp.save()
            .then((docs) => {
                console.log(`Employee ${docs.ename} added successfully`)
                mongoose.connection.close()
                console.log('disconnected')
            })
            .catch(error => console.log('Failed to add employee: ', error))
        // ===   

        res.json({ msg: `Employee with ${newEmployee.eid}: created successfully!` })
    }
    else {
        res.status(404).json({ msg: `Please provide employee name and city.` })
    }

})

// Update : To update a resource

router.put('/:eid', (req, res) => {
    let found = employees.some(employee => employee.eid == parseInt(req.params.eid))
    if (found) {
        let updatedEmployee = req.body
        employees.forEach(employee => {
            if (employee.eid == parseInt(req.params.eid)) {
                employee.ename = updatedEmployee.ename ? updatedEmployee.ename : employee.ename
                employee.ecity = updatedEmployee.ecity ? updatedEmployee.ecity : employee.ecity
                res.json(updatedEmployee)
            }
        })
        
    }
    else {
        res.status(404).json({ msg: `Employee with id : ${req.params.eid} not found.` })
    }
})

// Delete : To delete a resource

router.delete('/:eid', (req, res) => {
    let found = employees.some(employee => employee.eid == parseInt(req.params.eid))
    if (found) {
        res.json({msg:`Employee with ID: ${req.params.eid} deleted successfully.`},
        {employees:employee.filter(employee=>employee.eid!= parseInt(req.params.eid))}
        )
    }
    else {
        res.status(404).json({ msg: `Employee with id : ${req.params.eid} not found.` })
    }
})

module.exports = router
