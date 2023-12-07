let http = require('http')
let fs = require('fs')
let querystring = require('querystring')

let mongodb = require('mongodb')
const { error } = require('console')
let MongoClient = mongodb.MongoClient
let mongodbURL = 'mongodb://127.0.0.1:27017'

const PORT = 4000

let server = http.createServer((req, res) => {
    if (req.url == '/') {
        fs.createReadStream('public/home.html').pipe(res)
    }
    else if (req.url == '/training') {
        fs.createReadStream('public/training.html').pipe(res)
    }
    else if (req.url == '/about') {
        fs.createReadStream('public/about.html').pipe(res)
    }


    // sign up
    else if (req.url == '/signup' && req.method == 'GET') {
        fs.createReadStream('public/signup.html').pipe(res)
    }
    else if (req.url == '/signup' && req.method == 'POST') {
        res.writeHead(200, "OK", { 'content-type': 'text/html' })
        console.log('Register data received')

        req.on('data', (chunk) => {
            var form = querystring.parse(chunk.toString())
            console.log(form);

            MongoClient.connect(mongodbURL)
                .then((db) => {
                    console.log('Conneted Successfully');

                    let dbobj = db.db('nodejs')
                    dbobj.collection('registration').insertOne(form)
                        .then((result) => console.log(result.insertedId, 'Register confirom.'))
                        .catch(error => console.log('Failed to Insert data', error))

                })
                .catch(error => console.log('Failed to Connected', error))
        })

        fs.createReadStream('public/login.html').pipe(res)
    }



    //login
    else if (req.url == '/login' && req.method == 'GET') {
        fs.createReadStream('public/login.html').pipe(res)
    }

    else if (req.url == '/login' && req.method == 'POST') {

        res.writeHead(200, "OK", { 'content-type': 'text/html' })
        // console.log('login Successfully')

        req.on('data', (chunk) => {
            var form = querystring.parse(chunk.toString())
            console.log(form);

            MongoClient.connect(mongodbURL)
                .then((db) => {
                    console.log('Conneted Successfully');

                    let dbobj = db.db('nodejs')

                    let loginAuthentication = {
                        $and: [
                            { email: form.email },
                            { password: form.password }
                        ]
                    }
                    dbobj.collection('registration').findOne(loginAuthentication)
                        .then((result) => {
                            console.log(result.insertedId, 'Login Successfully.')

                            res.end('<h3 style="color:green;">Login Successfully.</h3>')
                            // fs.createReadStream('public/home.html').pipe(res)
                        })
                        .catch(error => {
                            console.log('Failed to Login', error)
                            res.end('<h3 style="color:red;">Please check your password and email again...</h3>')
                            // fs.createReadStream('public/login.html').pipe(res)
                        })

                })
                .catch(error => console.log('Failed to Connected', error))
        })

    }



    // contact
    else if (req.url == '/contact' && req.method == 'GET') {
        fs.createReadStream('public/contact.html').pipe(res)
        // console.log(req.method)
    }
    else if (req.url == '/contact' && req.method == 'POST') {
        res.writeHead(200, "OK", { 'content-type': 'text/html' })
        // console.log('Form data received');


        req.on('data', (chunk) => {
            var form = querystring.parse(chunk.toString())
            console.log(form);

            MongoClient.connect(mongodbURL)
                .then((db) => {
                    console.log('Conneted Successfully');

                    let dbobj = db.db('nodejs')
                    dbobj.collection('enquiries').insertOne(form)
                        .then((result) => console.log(result.insertedId, 'Enquiry Recieved.'))
                        .catch(error => console.log('Failed to Insert data', error))

                })
                .catch(error => console.log('Failed to Connected', error))

        })


        fs.createReadStream('public/contact.html').pipe(res)
    }
    else {
        fs.createReadStream('public/error404.html').pipe(res)
    }

})


server.listen(PORT, () => {
    console.log(`Server Listening in Port: ${PORT}`)
})