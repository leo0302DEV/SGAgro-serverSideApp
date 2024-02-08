import { animalSchema } from "../models/AnimalSchema.js";

export default class AppController {

    static async returnAllAnimalsObj(req, res) {
        try {
            const animaisCadastrados = await animalSchema.find({});
            res.setHeader("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(animaisCadastrados));;
        } catch (error) {
            res.status(500).json({ erro: error });
        }
    }

    static async returnOnlyOneAnimalObj(req, res) {
        try {
            const id = req.params.id;
            const animalCadastrado = await animalSchema.findById(id);
            res.setHeader("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(animalCadastrado));
        } catch (error) {
            res.status(500).json({ erro: error });
        }
    }

    static async createAnimalObj(req, res) {
        try {
            const animalParaCadastrar = req.body;
            await animalSchema.create(animalParaCadastrar);
            res.status(201).json({ message: "Cadastrado com sucesso" });
        } catch (error) {
            res.status(500).json({ erro: error });
        }
    }

    static async modifyAnimalObj(req, res) {
        try {
            const id = req.params.id;
            const alteracoes = req.body;
            await animalSchema.findByIdAndUpdate(id, alteracoes);
            res.status(201).json({ message: "Atualizado com sucesso" });
        } catch (error) {
            res.status(500).json({ erro: error });
        }
    }

    static async removeAnimalObj(req, res) {
        try {
            const id = req.params.id;
            await animalSchema.findByIdAndDelete(id);
            res.status(201).json({ message: "deletado com sucesso" });
        } catch (error) {
            res.status(500).json({ erro: error });
        }
    }
}
