let fs = require('fs')

// let rs = fs.createReadStream('event.txt')
// rs.on('open', ()=>console.log('File is opend.'))
// rs.on('close', ()=>console.log('File is closed.'))
// rs.close()


// eventEmitter 

let events = require('events')
// let add = (a,b)=>{
//     console.log('Addition fuction executed.')
// }

// let eventEmitter = new events.EventEmitter();
// eventEmitter.on('addition', add)
// eventEmitter.emit('addition')


let listener1= ()=>console.log('Listener-1 Executed.')
let listener2= ()=>console.log('Listener-2 Executed.')

let eventEmitter = new events.EventEmitter()

// eventEmitter.on('connection', listener1)
// or 
eventEmitter.addListener('connection', listener1)
eventEmitter.on('connection', listener2)

eventEmitter.emit('connection')

eventEmitter.removeListener('connection', listener1)
console.log('Listener-1 removed.*')
eventEmitter.emit('connection')



 