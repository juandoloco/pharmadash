module.exports = (sequelize, Sequelize) => {
    const Orden = sequelize.define("orden", {
      id_orden: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      id_cliente: {
        type: Sequelize.INTEGER
      },
      id_item: {
        type: Sequelize.INTEGER
      },
      id_sede: {
        type: Sequelize.INTEGER
      },
      estado: {
        type: Sequelize.STRING
      },
      fecha_creacion: {
        type: Sequelize.DATE
      }
    });
  
    return Orden;
  };
  