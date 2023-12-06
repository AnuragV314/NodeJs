let http = require('http')
let fs = require('fs')
let formidable = require('formidable')

const PORT = 3000

let server = http.createServer((req, res) => {
    if (req.url == '/' && req.method == 'GET') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>Uploading File in Node.js. Go to <strong style="color:green">/contact</strong></h1>')
        res.end()
    }
    else if (req.url == '/contact' && req.method == 'GET') {
        fs.createReadStream('contact.html').pipe(res)
    }
    else if (req.url == '/contact' && req.method == 'POST') {

        let form = new formidable.IncomingForm();
        form.uploadDir = "/home/anurag/Downloads"
        console.log(form.uploadDir)
        form.parse(req, (err, field, files) => {
            if (err) {
                console.log(err)
            }
            else {
                console.log(files)
                res.writeHead(200, 'OK', { 'content-type': 'text/html' })
                res.write('<h2 style="color:green">File uploaded successfully!</h2>')
                res.end()
            }
        })


    }
    else {
        res.writeHead(200, 'OK', { 'content-type': 'text/html' })
        res.write('<h2 style="color:red">Invalid request.</h2>')
        res.end()
    }
})


server.listen(PORT, () => {
    console.log('Server listening port 3000');
})







