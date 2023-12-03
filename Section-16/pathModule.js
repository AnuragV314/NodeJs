let path = require('path')

let p1 = '/nodejs/content/content.html'

console.log("Path Name: " + path.basename(p1))
console.log("Delimiter path: " + path.delimiter)
console.log("Directory Name: " + path.dirname(p1))
console.log("Extension Name: " + path.extname(p1))
console.log("Is Absolute: " + path.isAbsolute(p1))

let p2 = '/content'
let p3 = '/form.html'
console.log("Path: " + path.join(p2, p3))



