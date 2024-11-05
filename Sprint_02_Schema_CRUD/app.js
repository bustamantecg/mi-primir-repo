const mongoose  = require('mongoose');

//mongoose.connect('mongodb+srv://Grupo-19:grupo19@cursadanodejs.ls9ii.mongodb.net/Node-js',
/*mongoose.connect('mongodb+srv://Grupo-19:grupo19@cursadanodejs.ls9ii.mongodb.net/',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
)
.then(()=> console.log('Conexión Exitosa a Mongoose'))
.catch(error => console.log('Error al conectar con MomgoDB'));
*/
mongoose.connect('mongodb+srv://Grupo-19:grupo19@cursadanodejs.ls9ii.mongodb.net/')
    .then(() => console.log('Conexión Exitosa a MongoDB'))
    .catch(error => console.log('Error al conectar con MongoDB:', error));


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
});

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

// ver permisos