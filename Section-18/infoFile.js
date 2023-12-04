let fs = require('fs')

fs.stat('demo.txt', (err, stats) => {
    if (err) {
        console.log(err);
    }
    else {
        // console.log(stats);
        console.log(`Is file: ${stats.isFile()}`)
        console.log(`Is Directory: ${stats.isDirectory()}`)
    }

})




