const mongoose = require('mongoose')
let url = 'mongodb://127.0.0.1:27017/nodejs';
mongoose.connect(url)

let db = mongoose.connection
// console.log(db)


db.on('error', console.error.bind(console, 'Connection Error.'))

db.once('open', () => {
    console.log('Connection Successfully!');
})


let bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    author: String
})

let Book = mongoose.model('Book', bookSchema, 'bookstore')

let book1 = new Book({ name: 'Java', price: 30, author: 'Anurag' })

let books = [
    { name: 'Angular1', price: 40, author: 'Shanu' },
    { name: 'Angular2', price: 401, author: 'Shanu1' },
    { name: 'Angular3', price: 402, author: 'Shanu2' },
    { name: 'Angular4', price: 403, author: 'Shanu3' },
    { name: 'Angular5', price: 404, author: 'Shanu4' },
    { name: 'Angular6', price: 405, author: 'Shanu5' },
    { name: 'Angular7', price: 406, author: 'Shanu6' }

]
// old way
// book1.save((err, book)=>{
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(`${book.name} document inserted successfully!`);
//         db.close()
//     }
// })


// new way
// one data insert
// book1.save().then((book) => {
//     // console.log(book)
//     console.log(`${Book.name} document inserted successfully!`);
//     db.close()
// }).catch((err) => {
//     console.log(err);
// })


//insertOne & insertMany
Book.collection.insertMany(books).then(() => {
    console.log('Data Inserted.');
}).catch((err) => {
    console.log(err);
})

