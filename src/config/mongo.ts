import "dotenv/config";// Cargamos las variables de entorno desde el archivo ".env"
import { connect } from "mongoose";
// import mongoose from 'mongoose'; // Importo la biblioteca Mongoose para trabajar con MongoDB.


async function dbConnect(): Promise<void> {
    const MONGODB_URI = <string>process.env.MONGODB_URI;
    await connect(MONGODB_URI);
}

//otra forma de conectar.
// mongoose
//   .connect(process.env.MONGODB_URI as string) // Conecta a la base de datos MongoDB.
//   .then(() => console.log("Connected to MongoDB Atlas")) // Si la conexión es exitosa, muestra un mensaje.
//   .catch((error) => console.error(error)); // Si hay un error en la conexión, muestra el error.

export default dbConnect;