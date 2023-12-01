let fname = "Anurag"
let lname = 'Verma'

// Ex.1
// let person ={
//     fname:fname,
//     lname:lname
// }

// or 
let person ={
    fname,
    lname
}

// console.log(`${person.fname}`)
// console.log(`${person.lname}`)




// Ex.2
function createPerson(fname, lname) {  
    let fullName = fname+' '+lname
    return{
        // fname:fname,
        // lname:lname,
        // fullName:fullName

        // or 
        fname,
        lname,
        fullName
    }
}

// let p1 = createPerson(fname, lname)
// console.log(p1)


// Ex.3
function createPerson(fname, lname, age) {  
    let fullName = fname+' '+lname
    return{ 
        fname,
        lname,
        fullName,
        isSenior:function (){
            return age>55;
        } 
    }
}

let p2 = createPerson(fname, lname, 30)
console.log(p2)
console.log(`isSenior: ${p2.isSenior()}`)


let fn = "Full Name"

// Ex.4
let student={
    // first name: 'anurag', //error
    "first name": 'anurag',
    lname:'verma',
    [fn]: 'Anurag Verma'
}

console.log(student)
// console.log(`first name: ${student."first name"}`) //error
console.log(`first name: ${student["first name"]}`)

console.log(student[fn]) //or
console.log(student["Full Name"])