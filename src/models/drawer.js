module.exports = (sequelize, DataTypes) => {
  const Drawer = sequelize.define(
    "Drawer",
    {
      drawer_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      open_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },

      start_money: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sale_money: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      exp_drawer: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      act_drawer: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      dif: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      close_date: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "Drawer",
    },
  );
  Drawer.associate = db => {
    Drawer.belongsTo(db.User, {
      foreignKey: {
        name: "user_id",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    }),
      Drawer.hasMany(db.Bill, {
        foreignKey: {
          name: "drawer_id",
          allowNull: false,
        },
        onDelete: "RESTRICT",
      });
  };

  return Drawer;
};
