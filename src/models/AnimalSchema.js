import mongoose from "mongoose";

const AnimalSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    numeroBrinco: { type: String, required: true },
    idade: { type: Number, required: true },
    peso: { type: Number, required: true },
    medicamentacao: [
        {
            nomeMedicamento: { type: String, required: true },
            dataAplicacao: { type: Date, required: true },
            status: { type: String, required: true },
        }
    ],
    dataCadastramento: { type: Date, required: true },
    historicoVeterinario: { type: String },
    sexoAnimal: { type: String, required: true },
    prenhura: { type: Boolean, required: true },
    raçaAnimal: { type: String, required: true },
}, { versionKey: false });

const animalSchema = mongoose.model("animals", AnimalSchema);

export { animalSchema, AnimalSchema };
