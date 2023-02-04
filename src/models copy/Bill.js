module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define(
    "Bill",
    {
      //   shopName: {
      //     type: DataTypes.STRING,
      //     allowNull: false,
      //     validate: {
      //       notEmpty: true,
      //     },
      //   },

      total: {
        type: DataTypes.decimal(10, 2),
        allowNull: false,
      },
      paymentAmount: {
        type: DataTypes.decimal(10, 2),
        allowNull: false,
      },
      changeMoney: {
        type: DataTypes.decimal(10, 2),
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
