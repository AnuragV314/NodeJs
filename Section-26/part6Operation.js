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
        let tableName = 'employee'
        let insertQuary = `
                insert into ${tableName} 
                (ename, ecity, esalary) 
                values ('Ann', 'Noida', 90000),
                    ('shuuu', 'Patana', 91000),
                    ('Anug', 'Chandigar', 90000),
                    ('Shanu', 'Chenni', 91000);
                `
        let selectQuery = `select * from ${tableName};`

        let limitQuery = `select * from ${tableName} limit 2;`

        let orderByQuery = `select * from ${tableName} order by esalary DESC;` // ASC|DESC

        connection.query(orderByQuery, (err, result) => {
            if (err) throw err;
            else console.log(`Table ${tableName} created successfully!`, result);
        })
    }
    connection.end()
})  


