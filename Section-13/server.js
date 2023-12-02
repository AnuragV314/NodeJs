let http = require('http')
let fs = require('fs')
let url = require('url')


const PORT = 3000

let server = http.createServer((req, res) => {
    // res.writeHead(200, { 'Content-Type': 'text/html' })
    // res.write('<h1>Welcome to NodeJs</h1>')
    // res.write('<h2>Welcome to AngularJS</h2>')


    // console.log(req.url)
    let u = url.parse(req.url)
    console.log(u.pathname)
    if(u.pathname == '/home'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream('public/home.html').pipe(res)
    }
    else if(u.pathname == '/about'){
        res.writeHead(200, { 'Content-Type': 'text/html' })
        fs.createReadStream('public/about.html').pipe(res)
    }
    else{
        res.writeHead(200, { 'Content-Type': 'text/html' })
        res.write('<h1 style="color:red"> 404 page not found</h1>')
    }






    
    // fs.createReadStream( 'public/home.html' ).pipe(res)

    // let employee={
    //     "eid":1,
    //     "ename":"Anurag",
    //     "city": "Jaunpur"
    // }

    // res.write(JSON.stringify(employee))

    // console.log(http.STATUS_CODES)
    // console.log(http.METHODS)

    // res.end()
})


server.listen(PORT, () => {
    console.log('Server started on Port 3000')
})
