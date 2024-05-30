module.exports = (sequelize, Sequelize) => {
    const Mensajero = sequelize.define("mensajero", {
      id_mensajero: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre_mensajero: {
        type: Sequelize.STRING
      },
      apellido_mensajero: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.STRING
      },
      id_sede: {
        type: Sequelize.INTEGER
      }
    });
  
    return Mensajero;
  };
  