import path from 'path'

// definir una ruta de archivo de ejemplo
const filePath = './data/example.txt';

// obtener el directorio base
const dirName = path.dirname(filePath);
console.log('Directorio base:', dirName);

//Obtener el nombre del archivo sin extensión
const baseName = path.basename(filePath,'.txt');
console.log('Nombre del Archivo:', baseName);


//Obtener la extensión del archivo 
const extName = path.extname(filePath);
console.log('Extewnsión del Archivo:', extName);

//Crear una ruta unida
const newPath = path.join('/user', 'docs', 'newfile.txt');
console.log('Nueva Ruta: ', newPath);