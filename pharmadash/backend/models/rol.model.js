module.exports = (sequelize, Sequelize) => {
    const Rol = sequelize.define("rol", {
      id_rol: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre_rol: {
        type: Sequelize.STRING
      },
      descripcion: {
        type: Sequelize.STRING
      }
    });
  
    return Rol;
  };
  