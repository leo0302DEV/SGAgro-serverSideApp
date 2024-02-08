import express from "express";
import animals from "./animalRouts.js";
import cors from "cors";

const corsOptions = {
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Rota de teste");
    });
    app.use(express.json(), cors(corsOptions), animals);
};

export default routes;
