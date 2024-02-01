import express from "express";
import conectToDataBase from "./config/dbConection.js";
import AppController from "./controllers/AppController.js";

const conexao = await conectToDataBase();

conexao.on("error", (error) => {
    console.log("Erro de conexão com o banco: " + error);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});

const app = express();
app.use(express.json());

app.get("/animals", AppController.returnAllAnimalsObj);
app.get("/animals/:id", AppController.returnOnlyOneAnimalObj);
app.post("/animals", AppController.createAnimalObj);
app.put("/animals/:id", AppController.modifyAnimalObj);
app.delete("/animals/:id", AppController.removeAnimalObj);

export default app;
