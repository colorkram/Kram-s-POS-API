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
        allowNull: true,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "Menu",
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
          name: "category_id",
          allowNull: false,
        },
        onDelete: "RESTRICT",
      });
    Menu.belongsToMany(db.Bill, { through: db.Item, foreignKey: "menu_id" });
  };

  return Menu;
};
