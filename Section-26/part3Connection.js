let mysql = require('mysql')

// console.log(mysql);

let dbDetails = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root'
}

let connection = mysql.createConnection(dbDetails)

connection.connect((err) => {
    if (err) {
        console.log('Problem with database connection');
    }
    else {
        console.log('Connected successfully!');
        // query *
    }
    connection.end()
})


// query
// connection.query('show databases', function (error, results, fields) {
//     if (error) throw error;
//     else {
//         console.log(results);
//     }
// });
