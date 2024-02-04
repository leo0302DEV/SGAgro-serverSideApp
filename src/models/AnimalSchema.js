import mongoose from "mongoose";
import { MedicamentacaoSchema } from "./MedicamentacaoSchema.js";

const AnimalSchema = new mongoose.Schema({
    id: { type: mongoose.Schema.Types.ObjectId },
    numeroBrinco: { type: String, required: true },
    idade: { type: Number, required: true },
    peso: { type: Number, required: true },
    medicamentacao: [MedicamentacaoSchema],
    dataCadastramento: { type: Date, required: true },
    historicoVeterinario: { type: String },
    sexoAnimal: { type: String, required: true },
    prenhura: { type: Boolean },
    raçaAnimal: { type: String, required: true },
}, { versionKey: false });

const animalSchema = mongoose.model("animals", AnimalSchema);

export { animalSchema, AnimalSchema };
