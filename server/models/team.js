/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('team', {
		id: {
			type: DataTypes.INTEGER(11).UNSIGNED,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		leader_id: {
			type: DataTypes.INTEGER(10).UNSIGNED,
			allowNull: true,
			references: {
				model: 'user',
				key: 'id'
			}
		}
	}, {
		tableName: 'team',
		timestamps: false,
	});
};
