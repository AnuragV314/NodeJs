// // Nodemon 

// let http = require('http')
// let fs = require('fs')
// const PORT = 3000

// let server = http.createServer((req, res) => {
//     res.writeHead(200, { 'Content-Type': 'text/html' })
//     // res.write('<h1>Welcome to NodeJs</h1>')
//     // res.write('<h2>Welcome to AngularJS</h2>')
    
//     // fs.createReadStream( 'public/home.html' ).pipe(res)

//     let employee={
//         "eid":1,
//         "ename":"Anurag",
//         "city": "Jaunpur"
//     }

//     res.write(JSON.stringify(employee))

//     // console.log(http.STATUS_CODES)
//     // console.log(http.METHODS)

//     res.end()
// })


// server.listen(PORT, () => {
//     console.log('Server started on Port 3000')
// })




require('./server.js')





