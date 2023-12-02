let data = require('./main');

// console.log(data)
// console.log(typeof data)

console.log(data.a)
console.log(data.add(2,3))


console.log('Employee Id: '+data.employee.eid)
console.log('Employee Name: '+data.employee.ename)

data.employee.eid = 2
data.employee.ename = 'Shanu'

console.log('Employee Id: '+data.employee.eid)
console.log('Employee Name: '+data.employee.ename)