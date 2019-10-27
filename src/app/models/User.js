import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class User extends Model {
  static init(sequelize) {
    // esses campos não precisam refletir a base de dados, são só os campos que
    // o user vai poder preencher
    super.init(
      {
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL, // campo que nunca existe na database
        password_hash: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );
    // trechos de código executados de forma automática baseado em ações que acontecem no nosso model
    this.addHook('beforeSave', async user => {
      if (user.password) {
        user.password_hash = await bcrypt.hash(user.password, 8);
      }
    });

    return this;
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default User;
