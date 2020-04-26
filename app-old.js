const http = require('http');

http.createServer((req, res) => {

        res.writeHead(200, { 'Content-Type': 'application/json' });
        let salida = {
            nombre: "Santiago",
            edad: 21,
            desc: "Morena de 1.76 cm"
        };
        res.write(JSON.stringify(salida));
        res.end();
    })
    .listen(8080);

console.log("Escuchando puerto 8080");