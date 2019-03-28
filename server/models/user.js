
module.exports = function(sequelize, DataTypes) {
    return sequelize.define('user', {
                id: {
                  type: DataTypes.INTEGER(11).UNSIGNED,
                  allowNull: false,
                  primaryKey: true,
                  autoIncrement: true
                },
                name: {
                  type: DataTypes.CHAR(25),
                  allowNull: true
                },
                surname: {
                  type: DataTypes.CHAR(25),
                  allowNull: true
                },
                email: {
                  type: DataTypes.CHAR(50),
                  allowNull: true
                },
                team_id: {
                  type: DataTypes.INTEGER(10).UNSIGNED,
                  allowNull: true,
                  references: {
                    model: "team",
                    key: "id"
                  }
                },
                github_id: {
                  type: DataTypes.INTEGER(50),
                  allowNull: true
                },
                github_picture: {
                  type: DataTypes.CHAR(100),
                  allowNull: true
                }
              },
              {
                tableName: 'users',
                timestamps: false,
              }
        );
    }