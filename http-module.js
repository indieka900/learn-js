const http = require('http')

const server = http.createServer((req, res) =>{
    if (req.url === '/') {
      res.end(' Welcome to my home page')  
    }
    if(req.url === '/about'){
        res.end('Here is my about page')
    }
    res.end(
        '<h1>Oops page does not exists</h1>'
    )
})

server.listen(5000)