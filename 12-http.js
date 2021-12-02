const http = require('12-http')

// creation d'un serveur
const server = http.createServer((req,res) => {
    //console.log(req)
   // res.write('Welcome to our home page')
    if(req.url === '/'){
        res.end('Welcome to our home page')
    }
    if(req.url ==='/about'){
        res.end('Here is our short history')
    }
    res.end(`
<h1>Ooops!</h1>
<p>We can't seem to find the page you are looking for</p>
<a href="/">Back Home</a>
`)
})

server.listen(5000)
