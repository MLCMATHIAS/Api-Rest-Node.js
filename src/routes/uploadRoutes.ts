import express from "express";
import { getFile } from "../controllers/controllerUpload";
import multerMiddleware from "../middleware/file";
import { checkJwt } from "../middleware/session";

const router = express.Router();

router.post("/updload", checkJwt, multerMiddleware.single("myfile"), getFile);


export default router;