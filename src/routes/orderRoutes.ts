import express from "express";
import { getAllOrder } from "../controllers/controllerOrder";
import { checkJwt } from "../middleware/session";

//Es esta ruta solo puede acceder las personas que tienen session activa.
//que tenga un JWT valido.

const router = express.Router();

router.get('/order',checkJwt, getAllOrder)

export default router;