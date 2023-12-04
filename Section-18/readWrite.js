let fs = require('fs')

let data = fs.readFile('sample.txt', 'utf-8', (err, data) => {
    if (err)
        console.log(err);
    else {
        fs.writeFile('sample3.txt', data, () => {
            console.log('Data written successfully!');
        })
    }
})




