import Sequelize, { Model } from 'sequelize';

export default class Produto extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: {
          type: Sequelize.STRING,
        },
        preco: {
          type: Sequelize.FLOAT,
        },
      },
      {
        sequelize,
        modelName: 'produto',
      }
    );

    return this;
  }
}
