module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  database: 'gympoint',
  password: 'docker',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
