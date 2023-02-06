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
      timestamps: false,
      underscored: true,
      tableName: "Category",
    },
  );
  Category.associate = db => {
    Category.belongsTo(db.User, {
      foreignKey: {
        name: "user_id",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    }),
      Category.hasMany(db.Menu, {
        foreignKey: {
          name: "category_id",
          allowNull: false,
        },
        onDelete: "RESTRICT",
      });
  };

  return Category;
};
