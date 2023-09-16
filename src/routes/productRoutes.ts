import express from "express";
import { daleteItem, getAllItems, getItemId, postItem, updateItem } from "../controllers/controllerItem";
import { logMiddleware } from "../middleware/log";

const router = express.Router();

router.get("/item", getAllItems);

router.get("/item/:id", logMiddleware, getItemId);

router.post("/item", postItem);

router.put("/item/:id", updateItem);

router.delete("/item/:id", daleteItem);

export default router;