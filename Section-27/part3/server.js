//  REST API (Apllication Programing Interface)
let express = require('express')
let router = require('./routes/api/employeeroutes')


let app = express()
const PORT = 5000

app.use(express.json())

app.use('/api/employees',router)



app.listen(PORT, ()=>{
    console.log(`Server listening on  PORT ${PORT}`)
})







