let employee = {
    eid: 1,
    ename: 'Anurag',
    replaceecity: 'Noida',
    email: ['a@gmail.com', 'b@gmail.com'],
    isSenior: (experience) =>  experience>=5,
    address:{
        street:'ABC', 
        city:'Noida',
        state:'UP'
    }

}
// console.log(typeof employee)
// console.log(employee)
console.log(`Employee ID: ${employee.eid}`)
console.log(`Employee Name: ${employee.ename}`)
console.log(`Employee Replaceecity: ${employee.replaceecity}`)
console.log(`Employee Email: ${employee.email}`)

console.log(`Is Employee Senior: ${employee.isSenior(10)}`)

console.log('displaying Employee Address ====>')
console.log(`Employee Street: ${employee.address.street}`)
console.log(`Employee City: ${employee.address.city}`)
console.log(`Employee State: ${employee.address.state}`)


