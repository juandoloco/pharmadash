module.exports = (sequelize, Sequelize) => {
    const Usuario = sequelize.define("usuario", {
      id_usuario: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      usuario: {
        type: Sequelize.STRING
      },
      contrasenia: {
        type: Sequelize.STRING
      },
      id_rol: {
        type: Sequelize.INTEGER
      }
    });
  
    return Usuario;
  };
  