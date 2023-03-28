var http = require('http');
fs = require('fs');

http.createServer(function(solicitud,respuesta){

    const { url } = solicitud;
    if (url === '/') {
        template='inicio.html'
        
      }
    else if(url === '/nosotros') {
        template='nosotros.html'
      }
    else if(url === '/Nuestroservicio') {
        template='Nuestroservicio.html'
      }
    else if(url === '/catalogo') {
        template='catalogo.html'
      }
    else if(url === '/contactos') {
        template='contactos.html'
      }

    fs.readFile('templates/'+template,function(error,html) {
    respuesta.write(html);
    respuesta.end();    
    });
    }).listen(8081);

