let fs = require('fs')

fs.open('anurag1/sample.txt', 'r', (err, fd) => {

    if (err) {
        console.log(err);
    }
    else {
        console.log('file sample.txt is open.')

        fs.readFile(fd, 'utf-8', (err, data) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log(data);
            }

        })
    }

})


