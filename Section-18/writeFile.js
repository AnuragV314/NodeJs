let fs = require('fs')

// fs.writeFileSync('sample1.txt', 'Welcome to AngularJs. (write)')

fs.writeFile('sample2.txt', 'Welcome to NodeJs. (write)', ()=>{
    console.log('Data written to file successfully!');
})

console.log("code executed after completing write operation.");


