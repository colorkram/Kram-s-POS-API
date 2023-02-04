module.exports = (sequelize, DataTypes) => {
  const Drawer = sequelize.define(
    "Drawer",
    {
      openDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },

      startMoney: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      saleMoney: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      expMoney: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      actMoney: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      dif: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
      },
      closeDate: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      underscored: true,
    },
  );
  Drawer.associate = db => {
    Drawer.hasMany(db.Bill, {
      foreignKey: {
        name: "drawer_id",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    });
  };

  return User;
};
