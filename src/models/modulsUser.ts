import { Schema, model } from "mongoose"; // Importa la biblioteca Mongoose para definir esquemas y modelos.
import {User} from "../interfaces/user.interface";

//Los esquemas son la representacion de lo que vamos a guardar en la base de datos.

const UserSchema = new Schema<User>({
  name: { 
    type: String,
     required: true// Define un campo "name" de tipo String que es requerido.
     }, 
  password: {
    type: String,
    required:true
  }, 
  email: {
    type: String,
    required:true,
    unique:true
  }, 
  description:{
    type: String,
    default:"soy la descriptcion"
  }
},
{
    timestamps:true,
    versionKey:false,
  });

const Product = model('users', UserSchema); // Crea el modelo "Product" usando el esquema definido.

export default Product; // Exporta el modelo "Product" para usarlo en otras partes de la aplicación.