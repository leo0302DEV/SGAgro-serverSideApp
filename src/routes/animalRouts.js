import express from "express";
import AppController from "../controllers/AppController.js";

const routes = express.Router();

routes.get("/animals", AppController.returnAllAnimalsObj);
routes.get("/animals/:id", AppController.returnOnlyOneAnimalObj);
routes.post("/animals", AppController.createAnimalObj);
routes.put("/animals/group", AppController.modifyGroupOfAnimals);
routes.put("/animals/:id", AppController.modifyAnimalObj);
routes.delete("/animals/:id", AppController.removeAnimalObj);

export default routes;
