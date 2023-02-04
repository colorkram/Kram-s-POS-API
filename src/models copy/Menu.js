module.exports = (sequelize, DataTypes) => {
  const Menu = sequelize.define(
    "Menu",
    {
      menuName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
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
