let zlib = require('zlib')
let fs = require('fs')

// zipping
let gzip = zlib.createGzip()
let inp = fs.createReadStream('input.txt')
let out = fs.createWriteStream('input.txt.gz')

// inp.pipe(gzip).pipe(out)


// unzipping
let unzip = zlib.createGunzip();
let inp1 = fs.createReadStream('input.txt.gz')
let out1 = fs.createWriteStream('input1.txt')
inp1.pipe(unzip).pipe(out1)


