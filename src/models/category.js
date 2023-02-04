module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      category_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      category_name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
    },
    {
      underscored: true,
    },
  );
  Category.associate = db => {
    Category.hasMany(db.User, {
      foreignKey: {
        name: "user_id",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    }),
      Category.hasMany(db.Menu, {
        foreignKey: {
          name: "categoty_id",
          allowNull: false,
        },
        onDelete: "RESTRICT",
      });
  };

  return Category;
};
