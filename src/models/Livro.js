import mongoose from "mongoose";

const livroSchema  = new mongoose.Schema({
  id: { type: String },
  title: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true },
  publishing: { type: String, required: true },
  numPages: { type: Number },
});

export default mongoose.model('livros', livroSchema)