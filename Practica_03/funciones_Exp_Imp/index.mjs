
import { leerSuperheroes, agregarSuperheroes } from './utils.mjs';

const archivoOriginal = './superheroes.txt';
const archivoNuevos = './agregarSuperheroes.txt';
const miarchivoNuevo = './miSuperheroe.txt';
// Agregar nuevos superhéroes
agregarSuperheroes(archivoOriginal, archivoNuevos);
agregarSuperheroes(archivoOriginal, miarchivoNuevo);


// Leer y mostrar la lista de superhéroes ordenad

const superheroes = leerSuperheroes('./superheroes.txt');
console.log('Superhéroes ordenados:');
console.log(superheroes);


/*
Explicación:
Iimportamos la función leerSuperheroes desde utils.mjs .

Una vez Importada la función: Corremos la función para leer TXT meterlos en un vector de Suoperheros 
y retornarlos ordenados en un vector de objetos
al final se imprime un titulo y la lista ordenada de objetos Superheroesen la consola
*/
