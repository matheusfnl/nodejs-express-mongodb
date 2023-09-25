import autores from '../models/Autor.js';

export default class autoresController {
  static listarAutores = async (req, res) => {
    const data = await autores.find();
    res.status(200).json(data);
  }

  static listarAutor = async (req, res) => {
    const { id } = req.params;
    const data = await autores.findById(id);
    res.status(200).json(data);
  }

  static cadastrarAutor = async (req, res) => {
    let autor = new autores(req.body);

    try {
      autor.save();

      res.status(201).send(autor.toJSON());
    } catch (err) {
      res.status(500).send({ message: `${err.message} - Falha ao cadastrar o autor` });
    }
  }

  static atualizarAutor = async (req, res) => {
    const { id } = req.params;

    try {
      autores.findByIdAndUpdate(id, {$set: req.body}).exec();
      res.status(200).send({ message: 'Autor atualizado com sucesso' });
    } catch (err) {
      res.status(500).send({ message: `${err.message} - Falha ao atualizar o autor` });
    }
  }

  static excluirAutor = async (req, res) => {
    const { id } = req.params;

    try {
      autores.findByIdAndDelete(id).exec();
      res.status(200).send({ message: 'Autor deletado com sucesso' });
    } catch (err) {
      res.status(500).send({ message: `${err.message} - Falha ao deletar o autor` });
    }
  }
}