module.exports = function(sequelize, DataTypes) {
  return sequelize.define("report", {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      references: {
        model: "user",
        key: "id"
      }
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type: {
      type: DataTypes.CHAR(30),
      allowNull: false
    }
  });
};
