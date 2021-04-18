import Cliente from '../models/Cliente';

class ClienteController {
  async index(req, res) {
    try {
      await Cliente.find((err, clientes) => res.status(200).json(clientes));
    } catch (e) {
      return res.status(400).json({ err: 'Ops, algo deu errado' });
    }
  }

  async store(req, res) {
    try {
      const cliente = Cliente(req.body);

      await cliente.save((err, client) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json(client);
      });
    } catch (e) {
      return res.status(400).json({ err: 'Ops, algo deu errado' });
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params;

      await Cliente.findById(id, (err, client) => {
        if (err) return res.status(400).json(err);
        return res.status(200).json(client);
      });
    } catch (e) {
      return res.status(400).json({ err: 'Ops, algo deu errado' });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;

      await Cliente.findByIdAndUpdate(id, req.body, (err) => {
        if (err) return res.status(400).json(err);
        return res
          .status(200)
          .json({ success: 'Cliente atualizado com sucesso' });
      });
    } catch (e) {
      return res.status(400).json({ err: 'Ops, algo deu errado' });
    }
  }

  async delete(req, res) {
    const { id } = req.params;

    await Cliente.findByIdAndDelete(id, (err) => {
      if (err) return res.status(400).json(err);
      return res.status(200).json({ success: 'Cliente deletado com sucesso' });
    });
  }
}

export default new ClienteController();
