let express = require('express')
let path = require('path')
let blogger = require('./middleware/blogger')
let emp = require('./employee')

let app = express()

let PORT = 5000

app.use(blogger)

app.use(express.static(path.join(__dirname, 'public')))



app.get('/api/employee', (req, res)=>{
    // res.json({msg:'Welcome to Employee API.'})
    res.json(emp)
})
// app.get('/', (req, res) => {
//     res.send('<h1>Welcome to Express.js</h1>')
// })

// app.get('/contact', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'contact.html'))

// })


app.listen(PORT, () => {
    console.log(`Server Listening On PORT ${PORT}`);
})






