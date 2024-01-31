import mongoose from "mongoose";

const MedicamentacaoSchema = new mongoose.Schema({
    nomeMedicamento: { type: String, required: true },
    dataAplicacao: { type: Date, required: true },
}, { versionKey: false });

const medicamentacaoSchema = mongoose.model("medicamentacao", MedicamentacaoSchema);

export { MedicamentacaoSchema, medicamentacaoSchema };
