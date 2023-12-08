let mysql = require('mysql')

let dbDetails = {
    host: '127.0.0.1',
    user: 'root',
    password: 'root',
    database:'nodejs'
}

let connection = mysql.createConnection(dbDetails)
connection.connect((err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('connected successfully!');

        let databaseName = 'nodejs'
        // let createDatabase = `create database ${databaseName}`
        // let dropDatabase = `drop database ${databaseName}`

        let tableName = 'employee'
        // let createTable = `create table ${tableName} (eid int primary key auto_increment, ename varchar(50), ecity varchar(50), esalary int)`
        // let dropTable = `drop table ${tableName}`

        connection.query('', (err, result) => {
            if (err) throw err;
            else console.log(`Table ${tableName} created successfully!`, result);
        })
    }
    connection.end()
})  
