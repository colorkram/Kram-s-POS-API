module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      shop_name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
      underscored: true,
      tableName: "User",
    },
    {
      underscored: true,
    },
  );
  User.associate = db => {
    User.hasMany(db.Menu, {
      foreignKey: {
        name: "user_id",
        allowNull: false,
      },
      onDelete: "RESTRICT",
    }),
      User.hasMany(db.Bill, {
        foreignKey: {
          name: "user_id",
          allowNull: false,
        },
        onDelete: "RESTRICT",
      }),
      User.hasMany(db.Drawer, {
        foreignKey: {
          name: "user_id",
          allowNull: false,
        },
        onDelete: "RESTRICT",
      }),
      User.hasMany(db.Category, {
        foreignKey: {
          name: "user_id",
          allowNull: false,
        },
        onDelete: "RESTRICT",
      });
  };

  return User;
};
