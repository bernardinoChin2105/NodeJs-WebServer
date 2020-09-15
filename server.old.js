const http = require('http');
const port = 8181;

http.createServer((request, response) => {
        
    response.setHeader('Content-Type', 'application/json; charset=utf-8')
    response.write(`El request fué: ${request.url} y el response es: Hola mundo`);
    response.end();  
})
.listen(port);

console.log(`Escuchando en el puerto ${port}`);