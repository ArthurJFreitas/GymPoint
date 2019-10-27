import Sequelize from 'sequelize';
import dataBaseConfig from '../config/database';
import Student from '../app/models/Students';
import Users from '../app/models/User';

const models = [Student, Users];

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
