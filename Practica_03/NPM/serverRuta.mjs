import express from 'express';

const app = express();
const PORT = 3000;

app.get('/', (req, res) =>{
    res.send('<h1>Hola Carlos </h1>');
});

// Ruta GET con parámetro de ruta
// Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
	const userId = req.params.id;
	console.log(`ID del usuario recibido: ${userId}`);
	res.send(`<h1>Perfil del usuario con ID: ${userId}</h1>`);
});

// Ruta GET con múltiples parámetros
// Ejemplo de Solicitud: http://localhost:3000/product/electronics/456
app.get('/product/:category/:id', (req, res) => {
	const { category, id } = req.params;
	res.send(`Categoría: ${category}, ID del producto: <br>${id}`);
	});

app.listen(PORT, () => {
	console.log(`Servidor corriendo en http://localhost:${PORT}`);
	console.log(`Ctrl + c para bajar servidor`);
});