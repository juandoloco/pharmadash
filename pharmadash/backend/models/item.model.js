module.exports = (sequelize, Sequelize) => {
    const Item = sequelize.define("item", {
      id_item: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
      },
      nombre: {
        type: Sequelize.STRING
      },
      precio: {
        type: Sequelize.FLOAT
      },
      cantidad: {
        type: Sequelize.INTEGER
      }
    });
  
    return Item;
  };
  