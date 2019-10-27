import Sequelize, { Model } from 'sequelize';

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        age: Sequelize.INTEGER,
        weigth: Sequelize.DOUBLE,
        height: Sequelize.DOUBLE,
      },
      {
        sequelize,
      }
    );
  }
}

export default Student;
