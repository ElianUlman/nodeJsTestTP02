import { URL } from 'url';

function parsearUrl(urlString) {

    try {
        const miUrl = new URL(urlString);

        const parametrosObjeto = Object.fromEntries(miUrl.searchParams);

        return {
            "host": miUrl.origin,
            "pathname": miUrl.pathname,
            "parametros": parametrosObjeto
        };
    } catch (error) {
        console.error("Se produjo una excepción al parsear la URL:");
        console.error(`Mensaje de error: ${error.message}`);

        return null;
    }
}

console.log("--- Prueba con URL válida ---");
let objetoValido = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo");
if (objetoValido) console.log(objetoValido);

console.log("\n--- Prueba con URL errónea ---");
let objetoError = parsearUrl("esto_no_es_una_url");