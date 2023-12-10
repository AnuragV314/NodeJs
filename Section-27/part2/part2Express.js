let path = require('path')
let express = require('express')
let bodyParser = require('body-parser')
let mongoose = require('mongoose')


let app = express()
let PORT = 5000
// ==================mongoDB==================
let url = 'mongodb+srv://vermagup01:<password>@cluster0.v5qhisr.mongodb.net/nodejs?retryWrites=true&w=majority'
mongoose.connect(url)
    .then(() => {
        console.log('connected!')
        // mongoose.connection.close().then(()=>console.log('disconnectd'))
    })
    .catch(error => console.log(error))

let enquiresSchema = mongoose.Schema({
    name: String,
    email: String,
    phone: Number,
    subject: String,
    message: String
})

let Enquiries = mongoose.model('Enquiries', enquiresSchema, 'enquiries')

// ======================================


app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(express.urlencoded({ extended: false }))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'home.html'))

})


app.post('/contact', (req, res) => {
    res.setHeader("Content-Type", "text/html");
    
    // console.log(req.body)
    
    // insert data in collection (mongoDB code)
    let enquiry = new Enquiries(req.body)
    enquiry.save()
    .then((docs) => {
        console.log(`Dear ${docs.name}, Registration Success!`)
        mongoose.connection.close().then(() => console.log('disconnectd'))
    })
    .catch((error) => console.log(error))


    res.send(`<h2>Dear <strong style='color:green;'>${req.body.name}</strong>, Registration Success!</h2>`)
})



app.listen(PORT, () => {
    console.log(`Server Listening On PORT ${PORT}`);
})










