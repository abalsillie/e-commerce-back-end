const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Tag extends Model {}

Tag.init(
  {
    // define id column
    id: {
      type: DataTypes.INTEGER, // set as INTEGER
      allowNull: false, // don't allow NULL values
      primaryKey: true, // set as primary key
      autoIncrement: true, // auto increment
    },
    // define tag_name column
    tag_name: {
      type: DataTypes.STRING, // set as STRING
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "tag",
  }
);

module.exports = Tag;
