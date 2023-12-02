let http = require('http')
const PORT = 3000


let server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' })
    res.write('<h1 style="color:red">Welcome to NodeJs</h1>')
    res.write('<h1>' + req.url + '</h1>')
    res.end()
})


server.listen(PORT, () => {
    console.log('Server Listening in Port: 3000')
})