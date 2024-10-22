import { animalSchema } from "../models/AnimalSchema.js";

export default class AppController {

    static async returnAllAnimalsObj(req, res) {
        try {
            const animaisCadastrados = await animalSchema.find({});
            res.setHeader("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(animaisCadastrados));;
        } catch (error) {
            res.status(500).json({
                message: "Houve um erro interno do servidor, tente voltar a página principal e recaregar o site.",
                status: 500,
                statusMessage: "500 internal server error",
                erro: error,
            });
        }
    }

    static async returnOnlyOneAnimalObj(req, res) {
        try {
            const id = req.params.id;
            const animalCadastrado = await animalSchema.findById(id);
            res.setHeader("Content-Type", "application/json");
            res.status(200).send(JSON.stringify(animalCadastrado));
        } catch (error) {
            res.status(500).json({
                message: "Houve um erro interno do servidor, tente voltar a página principal e recaregar o site.",
                status: 500,
                statusMessage: "500 internal server error",
                erro: error,
            });
        }
    }

    static async createAnimalObj(req, res) {
        try {
            const animalParaCadastrar = req.body;
            const earingNumber = animalParaCadastrar.numeroBrinco;
            const verificacaoDeRepeticao = await animalSchema.find({ numeroBrinco: earingNumber });

            if (verificacaoDeRepeticao.length <= 0) {
                await animalSchema.create(animalParaCadastrar);
                res.status(201).json({
                    message: "Cadastrado com sucesso",
                    status: 201,
                    statusMessage: "201 created",
                });
            } else {
                res.status(400).json({
                    message: "Você não pode criar um novo cadastro com um número de brinco repetido! Mude o número e então prossiga com o cadastro.",
                    status: 400,
                    statusMessage: "400 bad request",
                });
            }

        } catch (error) {
            res.status(500).json({
                message: "Houve algum erro interno do servidor ou as informações passadas são invalidas. Tente novamente.",
                status: 500,
                statusMessage: "500 internal server error",
                erro: error,
            });
        }
    }

    static async modifyAnimalObj(req, res) {
        try {
            const id = req.params.id;
            const alteracoes = req.body;
            await animalSchema.findByIdAndUpdate(id, alteracoes);
            res.status(201).json({
                message: "Atualizado com sucesso",
                status: 201,
                statusMessage: "201 created",
            });
        } catch (error) {
            res.status(500).json({
                message: "Houve algum erro interno do servidor ou as informações passadas são invalidas. Tente novamente.",
                status: 500,
                statusMessage: "500 internal server error",
                erro: error,
            });
        }
    }

    static async removeAnimalObj(req, res) {
        try {
            const id = req.params.id;
            await animalSchema.findByIdAndDelete(id);
            res.status(201).json({
                message: "Deletado com sucesso!",
                status: 201,
                statusMessage: "201 deleted",
            });
        } catch (error) {
            res.status(500).json({
                message: "Houve um erro interno ao deletar o cadastro, tente novamente.",
                status: 500,
                statusMessage: "500 internal server error",
                erro: error,
            });
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

            res.status(201).json({
                message: "Cadastros modificados com sucesso!",
                status: 201,
                statusMessage: "201 created",
            });
        } catch (error) {
            res.status(404).json({
                message: "Não foram encontrados cadastros correspondentes aos números fornecidos.",
                status: 404,
                statusMessage: "404 not foud",
            });
        }
    }
}
