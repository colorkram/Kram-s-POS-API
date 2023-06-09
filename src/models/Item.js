module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define(
    "Item",
    {
      item_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      item_price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      bill_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      menu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      menu_name_item: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "Item",
    },
  );
  // Item.associate = db => {
  //   Item.belongsTo(db.Bill, {
  //     foreignKey: {
  //       name: "Bill_id",
  //       allowNull: false,
  //     },
  //     onDelete: "RESTRICT",
  //   }),
  //     Item.belongsTo(db.Menu, {
  //       foreignKey: {
  //         name: "Menu_id",
  //         allowNull: false,
  //       },
  //       onDelete: "RESTRICT",
  //     });
  // };

  return Item;
};
