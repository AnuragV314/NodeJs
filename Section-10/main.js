let cities = ['Hyderabad', 'Pune', 'Mumbai', 'Bangalore']



// let city1 = cities[0]
// let city2 = cities[1]
// let city3 = cities[2]
// let city4 = cities[3]
// or 
let  [city1, city2, city3, city4] = cities

console.log(city1)
console.log(city2)
console.log(city3)
console.log(city4)




let person = {
    fname:'Anurag',
    lname:'Verma',
    location:'Jaunpur'
}

// let fname = person.fname
// let lname = person.lname
// let location = person.location
// or
let {fname, lname, location} = person
// or
let {fname:fn, lname:ln, location:lon} = person
// or 
let {...data} = person // REST 


console.log(`First Name: ${fn}`)
console.log(`Last Name: ${ln}`)
console.log(`City Name: ${lon}`)
console.log(data)
console.log(typeof data)
console.log(Array.isArray(data))
