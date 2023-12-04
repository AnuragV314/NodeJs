let fs = require('fs')
// console.log(fs)

// let data = fs.readFileSync('sample.txt', 'utf-8')
// console.log(data);

let data = fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if (err)
        console.log(err);
    else
        console.log(data);
})


console.log("Welcome to Django");
console.log("Welcome to ExpressJs");

