const http = require('http')

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Running on port 3000')
        return
    }
    if (req.url === '/about') {
        res.end('Welcome to our about page')
        return
    }
    res.end(`
        <h1>Theres a error</h1>, 
        <a href='/'>Back home</a>
        `)

})



server.listen(3000)