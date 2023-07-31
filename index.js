const http = require('http')
const template = require('./template.js')

const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    res.statusCode = 200
    res.setHeader('Content-Type', 'text/html; charset=utf-8')
    res.setHeader('Cache-Control', 'no-cache')
    res.end(template(3000))
  } 
})

server.listen(3001, () => {
  console.log('listening on port 3001')
})