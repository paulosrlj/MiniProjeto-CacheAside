import Sequelize from 'sequelize';
import databaseConfig from '../../config/database';

import Produto from '../../models/Produto';

const models = [Produto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
