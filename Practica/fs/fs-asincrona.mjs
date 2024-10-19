import fs from 'fs'

// leer archivo de manera asincrona
fs.readFile('../data/example.txt', 'utf8', (err, data)=>{
    if (err) throw err;
    console.log('Contenido del Archivo: ', data);
});


// escribir en un nuevo archivo
fs.writeFile('../data/newfile.txt', 'Contenido Nuevo', (err) =>{
    if (err) throw err;
    console.log('Archivo creado con nombre newfile.txt y escribimos Contenido Nuevo')
});

// Renombrar un archivo
fs.rename('../data/newfile.txt', '../data/renamedfile.txt', (err)=>{
    if (err) throw err;
    console.log('Archivo Renombrado');
});