module.exports = (sequelize, Sequelize) => {
    const Cliente = sequelize.define("cliente", {
      id_cliente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      cedula: {
        type: Sequelize.STRING
      },
      apellidos: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      }
    });
  
    return Cliente;
  };
  