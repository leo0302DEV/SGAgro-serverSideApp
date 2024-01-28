import express from "express";

const app = express();
app.use(express.json());

const dataBese = [
    {
        nome: "Harry Potter",
        paginas: 360,
    },
    {
        nome: "Senhor dos Anéis",
        paginas: 536,
    }
];

app.get("/", (req, res) => {
    res.status(200).send("Teste");
});

app.get("/livros", (req, res) => {
    const livros = dataBese;
    res.status(200).send(livros);
});

export default app;


