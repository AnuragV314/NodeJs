let url = require('url')
let u = 'http://www.anurag.com/contact.html?username=anurag&password=root&mobile=9087654321'

let p = url.parse(u, true)
console.log(p)
console.log("Host: " + p.host)
console.log("Hostname: " + p.hostname)
console.log("Href: " + p.href)
console.log("Path: " + p.path)
console.log("Pathname: " + p.pathname)
console.log("Protocol: " + p.protocol)
console.log("Hostname: " + p.hostname)
console.log("Search: " + p.search)

console.log(p.query)

console.log("Username: " + p.query.username)
console.log("Password: " + p.query.password)
console.log("Mobile: " + p.query.mobile)