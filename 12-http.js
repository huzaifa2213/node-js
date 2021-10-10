const http = require('http');

const server = http.createServer((req,res)=>{
if(req.url === '/'){
    res.end('Here is main Page');
}
if(req.url === '/about'){
    res.end('Here is About page');
}
res.end(`
<h1>404 </h1>
<p>This page is not exist</p>
`)
})

server.listen(5000);