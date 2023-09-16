import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import {daleteCar, getAllCar, getCar, insertCar, updateCar} from "../service/item.service";


//El archivo controllers solo debe enterarce de las peticiones http
//de recibir y devolver datos.

//BUSCAR 
const getAllItems = async (req:Request, res:Response) => {
try{
    const response = await getAllCar();
    res.send(response);
}catch (e){
    handleHttp(res, "ERROR_GET_ITEM")
}
};

//BUSCAR POR ID
const getItemId = async( {params}:Request, res:Response) => {
try{
    const {id} = params;
    const response = await getCar(id);
    res.send(response);
}catch (e){
    handleHttp(res, "ERROR_GET_ITEM_ID")
}
};
//MODIFICAR
const updateItem = async ({params, body}: Request, res:Response) => {
try{
    const{id} = params
    const response = await updateCar(id, body);
    res.send(response);
}catch (e){
    handleHttp(res, "ERROR_UPDATE_ITEM")
}
};
//CREAR 
const postItem = async ({ body }: Request, res: Response) => {
try{
    const responseItem = await insertCar(body);
  res.send(responseItem);
}catch (e){
    handleHttp(res, "ERROR_POST_ITEM")
}
};

//BORRAR 
const daleteItem = async({params}:Request, res:Response) => {
try{
    const {id} = params;
    const response = await daleteCar(id);
    res.send(response);
}catch (e){
    handleHttp(res, "ERROR_DELETE_ITEM")
}
};

export {getAllItems, getItemId, postItem, updateItem, daleteItem};