import express from 'express';

import userRoutes from './routes/userRoutes.mjs';

const app= express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use('/users', userRoutes);

app.listen(3000, () =>{    
    console.log(`Servidor Carriendo en http://localhost:${PORT}`);
});
