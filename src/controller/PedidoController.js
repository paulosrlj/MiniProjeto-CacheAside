import Pedido from '../models/Pedido';
import Cliente from '../models/Cliente';
import Produto from '../models/Produto';

class PedidoController {
  async index(req, res) {
    try {
      await Pedido.find((err, pedidos) => res.status(200).json(pedidos));
    } catch (e) {
      return res.status(400).json({ err: 'Ops, algo deu errado' });
    }
  }

  async store(req, res) {
    try {
      const { email, senha } = req.body;

      const cliente = await Cliente.findOne({ email, senha });
      if (!cliente)
        return res
          .status(400)
          .json({ err: 'Usuário não encontrado ou senha inválida' });

      const { produtos } = req.body;

      const promisesProdutos = produtos.map(async (prod) => {
        const produto = await Produto.findByPk(prod[0]);
        const { id, nome, preco } = produto;

        return [id, nome, preco * prod[1]];
      });

      const infoProdutos = await Promise.all(promisesProdutos);

      const valorTotal = infoProdutos.reduce((acc, cur) => acc + cur[2], 0);

      const pedido = Pedido({
        produtos: infoProdutos,
        cliente: email,
        valorTotal,
      });

      await pedido.save((err, pedidoSalvo) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json(pedidoSalvo);
      });
    } catch (e) {
      return res.status(400).json({ err: 'Ops, algo deu errado' });
    }
  }

  async show(req, res) {
    try {
      const { email, senha } = req.body;

      const cliente = await Cliente.findOne({ email, senha });
      if (!cliente)
        return res
          .status(400)
          .json({ err: 'Usuário não encontrado ou senha inválida' });

      await Pedido.find({ cliente: email }, (err, pedido) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json(pedido);
      });
    } catch (e) {
      return res.status(400).json({ err: 'Ops, algo deu errado' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      const { email, senha } = req.body;

      const cliente = await Cliente.findOne({ email, senha });
      if (!cliente)
        return res
          .status(400)
          .json({ err: 'Usuário não encontrado ou senha inválida' });

      await Pedido.findByIdAndUpdate(id, req.body, (err) => {
        if (err) return res.status(400).json(err);
        return res
          .status(200)
          .json({ success: 'Pedido atualizado com sucesso' });
      });
    } catch (e) {
      return res.status(400).json({ err: 'Ops, algo deu errado' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    await Pedido.findByIdAndDelete(id, (err) => {
      if (err) return res.status(400).json(err);
      return res.status(200).json({ success: 'Pedido deletado com sucesso' });
    });
  }
}

export default new PedidoController();
