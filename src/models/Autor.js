import mongoose from "mongoose";

const autorSchema = new mongoose.Schema({
  id: { type: String},
  name: { type: String, required: true },
  nationality: { type: String, required: true },
}, { versionKey: false })

export default mongoose.model('autores', autorSchema);