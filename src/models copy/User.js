module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      username: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shopName: {
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
