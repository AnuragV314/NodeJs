console.log('Welcome Anurag!')

console.log(__dirname)
console.log(__filename)


setTimeout(() => {
    console.log('2 second passed')
}, 2000);




let d = new Date().toLocaleTimeString()
let time = 0
let t1 = setInterval(() => {
    // console.log(d)
    // d = new Date().toLocaleTimeString()
    console.log(time)
    time += 1

    if (time > 5) {
        clearInterval(t1)
    }

}, 1000);



