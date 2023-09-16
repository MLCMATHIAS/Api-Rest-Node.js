import { Schema, model } from "mongoose"; // Importa la biblioteca Mongoose para definir esquemas y modelos.
import {Car} from "../interfaces/car.interface";

//Los esquemas son la representacion de lo que vamos a guardar en la base de datos.

const productSchema = new Schema<Car>({
  name: { 
    type: String,
     required: true// Define un campo "name" de tipo String que es requerido.
     }, 
  color: 
  {
    type: String,
    required:true
  }, 
  gas: {
    type: String, 
    enum: ["gasoline", "electric"],
    required:true

  }, 
  description:{
     type: String ,// Define un campo "description" de tipo String (opcional).
     required:true

    }, 
  price:{
     type: Number,
      required: true // Define un campo "price" de tipo Number que es requerido.
     },
},
{
    timestamps:true,
    versionKey:false,
  });

const Product = model('Product', productSchema); // Crea el modelo "Product" usando el esquema definido.

export default Product; // Exporta el modelo "Product" para usarlo en otras partes de la aplicación.