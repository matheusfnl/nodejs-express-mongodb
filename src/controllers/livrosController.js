import livros from '../models/Livro.js';

export default class livroController {
  static listarLivros = async (req, res) => {
    const data = await livros.find().populate('author').exec();
    res.status(200).json(data);
  }

  static listarLivro = async (req, res) => {
    const { id } = req.params;
    const data = await livros.findById(id).populate('author', 'name').exec();
    res.status(200).json(data);
  }

  static listarLivroPorEditora = async (req, res) => {
    const { editora } = req.query;

    console.log(editora);

    const data = await livros.find({ 'publishing': editora })
    res.status(200).json(data);
  }

  static cadastrarLivro = async (req, res) => {
    let livro = new livros(req.body);

    try {
      livro.save();

      res.status(201).send(livro.toJSON());
    } catch (err) {
      res.status(500).send({ message: `${err.message} - Falha ao cadastrar o livro` });
    }
  }

  static atualizarLivro = async (req, res) => {
    const { id } = req.params;

    try {
      livros.findByIdAndUpdate(id, {$set: req.body}).exec();
      res.status(200).send({ message: 'Livro atualizado com sucesso' });
    } catch (err) {
      res.status(500).send({ message: `${err.message} - Falha ao atualizar o livro` });
    }
  }

  static excluirLivro = async (req, res) => {
    const { id } = req.params;

    try {
      livros.findByIdAndDelete(id).exec();
      res.status(200).send({ message: 'Livro deletado com sucesso' });
    } catch (err) {
      res.status(500).send({ message: `${err.message} - Falha ao deletar o livro` });
    }
  }
}

