import express from "express";
import conectToDataBase from "./config/dbConection.js";
import routes from "./routes/routes.js";

const conexao = await conectToDataBase();

conexao.on("error", (error) => {
    console.log("Erro de conexão com o banco: " + error);
});

conexao.once("open", () => {
    console.log("Conexão com o banco feita com sucesso!");
});

const app = express();
app.use(express.json());
routes(app);

export default app;
