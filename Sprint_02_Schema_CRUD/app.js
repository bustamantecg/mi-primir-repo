const mongoose  = require('mongoose');

const url1 = 'mongodb+srv://Grupo-19:grupo19@cursadanodejs.ls9ii.mongodb.net/Node-js?retryWrites=true&w=majority';
mongoose.connect(url1)
.then(() => console.log('Conectado a la base de datos'))
.catch((error) => console.error('Error al conectar a la base de datos:', error))

//********************************************************************************** */
// definicion del esquema
const superheroeSchema = new mongoose.Schema({
    nombreSuperHeroe: {type: String, require:true},
    nombreReal:{type: String, require:true},
    edad:{type: Number, min:0},
    planetaOrigen:{type: String, default:'Desconocido'},
    debilidad: String,
    poderes:[String],
    aliados:[String],
    enemigos:[String],
    createdAt:{type:Date, default: Date.now}
}, { collection: 'Grupo-19'});

const SuperHero = mongoose.model('SuperHero', superheroeSchema);

//********************************************************************************** */
async function InsertSuperHero() {
    const hero = new SuperHero({
        nombreSuperHeroe:'Spiderman3',
        nombreReal:'Peter Parker',
        edad:25,
        planetaOrigen:'Tierra',
        debilidad:'Radioactividad',
        poderes:['Trepar paredes', 'agilidad', 'super fuerza', 'sentido aracnido'],
        aliados:['Ironman'],
        enemigos:['Duende Amarillo', 'Hombre lagarto'],
    });
    try {
        await hero.save();
        console.log('Superhéroe insertado:', hero);
    } catch (error) {
        console.error('Error al insertar superhéroe:', error);
    }
};
InsertSuperHero();

//********************************************************************************** */
async function updateSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.updateOne(
        {nombreSuperHeroe: nombreSuperHeroe},
        {$set:{edad:26}}
    );
    console.log('Actualización exitosa:', result);
};
updateSuperHero('Spiderman3');


//********************************************************************************** */
async function deleteSuperHero(nombreSuperHeroe) {
    const result = await SuperHero.deleteOne(
        {nombreSuperHeroe: nombreSuperHeroe}
    );
    console.log('Eliminación exitosa:', result);
};

deleteSuperHero('Spiderman3');


//********************************************************************************** */
async function findSuperHero() {
    const heroes = await SuperHero.find(
        {planetaOrigen:'Tierra'}
    );
    console.log('SuperHeroes Encontrados:', heroes);
}

findSuperHero();