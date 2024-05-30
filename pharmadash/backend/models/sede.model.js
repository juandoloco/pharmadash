module.exports = (sequelize, Sequelize) => {
  const Sede = sequelize.define("sede", {
    id_sede: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    nombre_sede: {
      type: Sequelize.STRING
    },
    direccion: {
      type: Sequelize.STRING
    },
    telefono: {
      type: Sequelize.STRING
    }
  });

  return Sede;
};
