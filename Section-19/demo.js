let querystring = require('querystring');

let q = 'fname=anurag&lname=verma&city=jaunpur'

// Quary to JSON [querystring.parse(q)]===>
let obj = querystring.parse(q)
// console.log(obj)
// console.log(obj.fname)
// console.log(obj.lname)
// console.log(obj.city)


// JSON to Quary [querystring.stringify(obj)]===>
let qs = querystring.stringify(obj)
// console.log(qs)




let fs = require('fs')
let http = require('http')
let mysql = require('mysql'); //npm install mysql

let dbDetail = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database: 'nodejs',
    port: 3306
}
const PORT = 3000


let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    if (req.url == '/contact' && req.method == 'GET') {
        fs.createReadStream('public/contact.html').pipe(res)
    }
    else if (req.url == '/contact' && req.method == 'POST') {

        // database connection
        let connection = mysql.createConnection(dbDetail)

        connection.connect(err => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Connection Established.');
            }
        })




        req.on('data', (data) => {
            // console.log(data.toString());
            let form = querystring.parse(data.toString())
            // console.log(form);
            let { name, email, phone, city } = form

            let insertQuery = `insert into enquiry (name, email, phone, city) values('${name}','${email}','${phone}','${city}')`
            connection.query(insertQuery, (err, result) => {
                if (err) {
                    console.log(err);
                }
                else {
                    res.writeHead(200, 'OK', { 'Content-Type': 'text/html' })
                    res.end(`<h2 style="color:green; text-align:center">Dear <strong style="color:red;">${name} ,</strong> Thank you for contacting us...</h2>`)
                }
            })

            // console.log(`Name: ${name}`);
            // console.log(`Email: ${email}`);
            // console.log(`Phone: ${phone}`);
            // console.log(`City: ${city}`);
            connection.end()
        });
    }
})


server.listen(PORT, () => {
    console.log('Server Listening in Port: 3000')
})
