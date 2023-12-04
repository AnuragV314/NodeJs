let fs = require('fs')
// fs.rmdirSync('anurag')

// fs.unlink('nodejs/sample.txt', ()=>console.log('file "nodejs/sample.txt" deleted successfully.'))
fs.rmdir('nodejs', ()=>console.log(`Directory "nodejs" deleted successfully!`))

