//Este archivo va a ser el encargado de la logica del servicio.

import { Car} from "../interfaces/car.interface";
import Product from "../models/ModulsProducts"

//agregar
const insertCar = async (item: Car) => {
    const responseInsert = await Product.create(item);
    return responseInsert;
}
//buscar todos
const getAllCar = async () => {
    const responseItem = await Product.find({});
    return responseItem;
}
//Buscar uno por id
const getCar = async (id: string) => {
    const responseItem = await Product.findOne({_id: id});
    return responseItem;
}
//modificar
const updateCar = async (id: string, data: Car) => {
    const responseItem = await Product.findOneAndUpdate({_id: id}, data, {new: true,});
    return responseItem;
}
//eliminar
const daleteCar = async (id: string) => {
    const responseItem = await Product.findByIdAndRemove({_id: id});
    return responseItem;
}

export {insertCar, getAllCar, getCar, updateCar, daleteCar}
