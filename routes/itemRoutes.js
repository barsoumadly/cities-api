import express from "express";
import {
  createItem,
  deleteItem,
  deleteItems,
  getItems,
  updateItem,
} from "../controllers/itemController.js";

const router = express.Router();

router.get("/items", getItems);
router.post("/items", createItem);
router.patch("/items/:id", updateItem);
router.delete("/items/:id", deleteItem);
router.delete("/items", deleteItems);

export default router;
