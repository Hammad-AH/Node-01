const http = require ("http");
const handleRequest = (request, response)=> {
if(request.url == "/"){
response.writeHead(200,{"content-type" : 'application/json'})
response.end(JSON.stringify(
    {message:"app is running on server data"
}
))
}
if(request.url == "/first" && request.method == "POST"){
response.writeHead(200, {"content-type": "application/json"})
response.end(JSON.stringify({message:"success", data: request.body}))

}
}

const server= http.createServer(handleRequest);
const PORT=4000;
server.listen(PORT,()=>{ console.log(`server is running on ${PORT}`)})