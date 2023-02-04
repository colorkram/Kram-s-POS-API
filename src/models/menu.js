module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "Menu",
    {
      menu_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      menu_name: {
        type: DataTypes.STRING,
        allowNull: true,
      },

      price: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
    },
  );
  Menu.associate = db => {
    Menu.belongsTo(db.User, {
      foreignKey: {
        name: "user_id",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    }),
      Menu.belongsTo(db.Category, {
        foreignKey: {
          name: "categoty_id",
          allowNull: false,
        },
        onDelete: "RESTRICT",
      });
  };

  return Menu;
};
