module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define(
    "Category",
    {
      categoryName: {
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
  //   User.associate = db => {
  //     User.hasMany(db.Transaction, {
  //       foreignKey: {
  //         name: "userId",
  //         allowNull: false,
  //       },
  //       onDelete: "RESTRICT",
  //     });
  //   };

  return User;
};
