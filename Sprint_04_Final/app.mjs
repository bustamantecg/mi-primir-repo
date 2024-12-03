import express from 'express';
import path from 'path';
import expressLayouts from 'express-ejs-layouts';

import { connectDB } from './config/dbConfig.mjs';
import superheroesRoutes from './routes/superHeroRoutes.mjs';
import methodOverride from 'method-override';

const app = express();
const PORT = 3000;
connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true })); 
app.use(methodOverride('_method')); // Permite usar ?_method=PUT en formularios

// Configurar EJS como motor de templates
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

//Configurar express-ejs-layouts
app.use(expressLayouts);
app.set('layout', 'layout'); // archivo Base de layout

// Servir archivos estaticos
app.use(express.static(path.resolve('./public')));

// Ruta a pagina principal
app.get('/', (req, res) =>{
  res.render('index2',{
    title:'Página Principal'
  })
});

/****************************************** */

app.use('/api', superheroesRoutes);

app.use((req, res) => {
  res.status(404).send({ error: 'Ruta no encontrada' });
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
  console.log(`Servidor Carriendo en http://localhost:${PORT}`);
  console.log(`Ctrl+C para bajar servidor`);
});


// instalar 