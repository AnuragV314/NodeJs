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
        let tableName = 'employee'
        // let createTable = `create table ${tableName} (eid int primary key auto_increment, ename varchar(50), ecity varchar(50), esalary int)`
        let insertQuary = `
                insert into ${tableName} 
                (ename, ecity, esalary) 
                values ('Anurag', 'Jaunpur', 90000)
                `

        let selectQuery = `select * from ${tableName}`
        
        connection.query(selectQuery, (err, result) => {
            if (err) throw err;
            else console.log(`Table ${tableName} created successfully!`, result);
        })
    }
    connection.end()
})  
