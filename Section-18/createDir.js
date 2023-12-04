let fs = require('fs')

// fs.mkdirSync('anurag')
// fs.mkdir('anurag1', ()=>console.log('directory anurag1 created successfully!'))

// Ex 

fs.mkdir('nodejs', ()=>{
    console.log('directory nodeJs created successfully!')
    fs.writeFile('nodejs/sample.txt', 'Welcome to Nodejs', ()=>console.log('data written successfully!'))
})



