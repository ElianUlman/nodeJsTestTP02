import fs from "fs";
let contenidoOriginal;

fs.readFile("ArchivoOrigen.txt", "utf8", (error, data) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  console.log(data);
  contenidoOriginal = data

  fs.writeFile("ArchivoCopia.txt", contenidoOriginal, (err) => {
  if (err) {
    console.error("Error:", err);
    return;
  }
  console.log("Archivo creado");
});
});
