import express from "express";
import validateBody from "./middlewares/validateBody.js";
import { createFile } from "./controllers.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Get");
});

router.get("/:fileName", (req, res) => {
  res.send("Get/fileName");
});

router.post("/", validateBody, createFile);

export default router;
