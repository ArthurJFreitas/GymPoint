import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import Student from '../app/models/Studends';

const models = [Student];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(dataBaseConfig);

    models.map(model => model.init(this.connection));
  }
}

export default new Database();
