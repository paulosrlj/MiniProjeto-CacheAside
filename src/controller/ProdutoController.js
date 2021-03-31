import Produto from '../models/Produto';
import redisClient from '../database/index';

class ProdutoController {
  async index(req, res) {
    try {
      const produtos = await Produto.findAll({
        attributes: ['id', 'nome', ['preco', 'preço']],
        order: [['id', 'ASC']],
      });

      if (!produtos)
        return res
          .status(400)
          .json({ error: 'Não existem produtos na base de dados' });

      return res.status(200).json(produtos);
    } catch (e) {
      return res
        .status(400)
        .json({ error: 'Houve um erro ao listar os produtos.' });
    }
  }

  // eslint-disable-next-line consistent-return
  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: 'O id não foi informado' });
      redisClient.get(id, async (err, reply) => {
        if (reply != null) {
          const produto = JSON.parse(reply.toString());
          return res.status(200).json(produto);
        }
        const produto = await Produto.findByPk(id, {
          attributes: ['id', 'nome', 'preco'],
        });
        if (!produto)
          return res.status(400).json({ error: 'O produto não existe' });

        // Setar o produto no cache do Redis
        const { id: produtoId, nome, preco } = produto;
        const dados = { produtoId, nome, preco };

        redisClient.setex(produtoId, 3600, JSON.stringify(dados));

        return res.status(200).json(produto);
      });
    } catch (e) {
      return res
        .status(400)
        .json({ error: 'Houve um erro ao exibir um produto.' });
    }
  }

  async store(req, res) {
    try {
      const produto = await Produto.create(req.body);
      return res.status(200).json(produto);
    } catch (e) {
      return res
        .status(400)
        .json({ error: 'Houve um erro ao criar um produto.' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: 'O id não foi informado' });

      const produtoAtualizado = await Produto.findByPk(id);

      await produtoAtualizado.update(req.body);

      if (!produtoAtualizado)
        return res.status(400).json({ error: 'O produto não existe' });

      return res.status(200).json(produtoAtualizado);
    } catch (e) {
      return res
        .status(400)
        .json({ error: 'Houve um erro ao atualizar um produto.' });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) return res.status(400).json({ error: 'O id não foi informado' });

      const produto = await Produto.findByPk(id);

      await produto.destroy();

      return res.status(200).json({ success: 'Produto deletado com sucesso' });
    } catch (e) {
      return res
        .status(400)
        .json({ error: 'Houve um erro ao deletar um produto.' });
    }
  }
}

export default new ProdutoController();
