module.exports = (sequelize, DataTypes) => {
  const Bill = sequelize.define(
    "Bill",
    {
      bill_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      total: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },

      change_money: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      payment_amout: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "Bill",
    },
  );
  Bill.associate = db => {
    Bill.belongsTo(db.User, {
      foreignKey: {
        name: "user_id",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    }),
      Bill.belongsTo(db.Drawer, {
        foreignKey: {
          name: "drawer_id",
          allowNull: false,
        },
        onDelete: "RESTRICT",
      }),
      // Bill.hasMany(db.Item, {
      //   foreignKey: {
      //     name: "bill_id",
      //     allowNull: false,
      //   },
      //   onDelete: "RESTRICT",
      // });
      Bill.belongsToMany(db.Menu, { through: db.Item, foreignKey: "bill_id" });
  };
  return Bill;
};
