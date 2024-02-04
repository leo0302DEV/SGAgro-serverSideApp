import express from "express";
import animals from "./animalRouts.js";

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send("Rota de teste");
    });
    app.use(express.json(), animals);
};

export default routes;
