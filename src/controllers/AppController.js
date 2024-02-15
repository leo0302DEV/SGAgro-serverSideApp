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

    static async modifyGroupOfAnimals(req, res) {
        try {
            const earingNumbers = req.query.earingq;
            const modifications = req.body;
            const arrEaringNumbers = earingNumbers.match(/\d{3}/g);
            const arrOfFindedAnimal = [];

            for (let i = 0; i < arrEaringNumbers.length; i++) {
                const findedAnimal = await animalSchema.find({ numeroBrinco: arrEaringNumbers[i] });
                if (findedAnimal) arrOfFindedAnimal.push(findedAnimal);
            }

            for (let j = 0; j < arrOfFindedAnimal.length; j++) {
                const medicamentacaoAtual = arrOfFindedAnimal[j][0].medicamentacao;
                const medicamentacaoInserida = modifications.medicamentacao;
                const medicamentacaoModificada = [...medicamentacaoAtual, ...medicamentacaoInserida];

                const historicoAtual = arrOfFindedAnimal[j][0].historicoVeterinario;
                const historicoInserido = modifications.historicoVeterinario;
                const historicoModificado = historicoAtual + " " + historicoInserido;

                arrOfFindedAnimal[j][0].medicamentacao = medicamentacaoModificada;
                arrOfFindedAnimal[j][0].historicoVeterinario = historicoModificado;
            }

            for (let k = 0; k < arrOfFindedAnimal.length; k++) {
                const animalId = arrOfFindedAnimal[k][0]._id;
                const alteracoes = arrOfFindedAnimal[k][0];

                await animalSchema.findByIdAndUpdate(animalId, alteracoes);
            }

            res.status(201).json(arrOfFindedAnimal);
        } catch (error) {
            res.status(404).json({ message: "Não foram encontrados cadastros correspondentes aos números fornecidos." });
        }
    }
}
