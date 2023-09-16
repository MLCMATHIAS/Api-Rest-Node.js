import express from 'express'; // Importo el framework Express para crear el servidor web.
import * as dotenv from 'dotenv'; // Importo la biblioteca dotenv para cargar las variables de entorno.
import itemRoute  from './routes/productRoutes';
import registerRoute from './routes/authRoutes';
import orderRoute from './routes/orderRoutes'
import loginRoute from './routes/authRoutes';
import uploadRoute from './routes/uploadRoutes';
import db from "./config/mongo";
dotenv.config(); // Carga las variables de entorno desde un archivo .env.

const app = express(); // Crea una instancia de la aplicación Express.
const PORT = process.env.PORT || 3002; // Define el puerto en el que se ejecutará el servidor.

// Middleware
app.use(express.json()); // Permite a Express manejar solicitudes JSON.
app.use('/api', itemRoute); // Asocia las rutas de productos a la ruta base "/api".
app.use('/auth', registerRoute);
app.use('/auth', loginRoute);
app.use('/',orderRoute );
app.use('/', uploadRoute );
// Conexión a MongoDB
db().then(() => console.log("Conexion Ready"));


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`); // Inicia el servidor y muestra el puerto en el que está escuchando.
});
