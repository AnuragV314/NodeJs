// add(4, 4)

// function add(x, y){
//     let res = x+y;
//     console.log(res)
// }

// add(2, 4)


// Anonymous function expression

// add(100,100) error

let add = function (x, y) {
    let res = x + y;
    console.log(res)
}

add(100, 100)



// Anonymous function expression

let mul = function multiplication(x, y) {
    let res = x * y
    console.log(res)
}
mul(2, 2)
// multiplication(2,2) //error



// self invoking function expression

let sub = (function substraction(i, j) {
    let res = i-j
    console.log(res)
})

(4,2);


// =====>
// Arrow Function

// Ex.1
let add1 = (n1,n2)=>{
    let res = n1+n2
    console.log(res)
}

add1(10,10)

// Ex.2
// let display = ()=>{
//     console.log('Write anything')
// }

let display = ()=>console.log('Write anything')
display()


// Ex.3

let double= n=>n*2
console.log(double(3))


// Ex.4
let d = new Date()
setInterval(()=>{
    console.log(d)
    d = new Date()
}, 1000)