import { URL } from 'url';

function parsearUrl(urlString) {

    const miUrl = new URL(urlString);

    const parametrosObjeto = Object.fromEntries(miUrl.searchParams);

    return {
        "host": miUrl.origin,      
        "pathname": miUrl.pathname,
        "parametros": parametrosObjeto
    };
}

let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
console.log(objeto)