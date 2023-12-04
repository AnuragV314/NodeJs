let fs = require('fs')

// fs.unlinkSync('sample3.txt')
fs.unlink('sample2.txt', ()=>{
    console.log("file sample2.txt deleted successfully.");
})

