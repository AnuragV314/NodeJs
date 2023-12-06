let fs = require('fs')

let rs = fs.createReadStream('sample.txt', 'utf-8')
let ws = fs.createWriteStream('sample11.txt')

rs.on('open', ()=>{
    console.log('File opened.')
})

rs.on('data', (chunk)=>{
    console.log('New chunk arrived')
    // console.log(chunk)

    // ws.write(chunk)
    // or 
    rs.pipe(ws)
})






