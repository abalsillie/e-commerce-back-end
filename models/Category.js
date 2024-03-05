const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    // defining id column
    id: {
      type: DataTypes.INTEGER, // set as INTEGER
      allowNull: false, // don't allow NULL values
      primaryKey: true, // set as primary key
      autoIncrement: true, // auto increment
    },
    // defining 'category_name' column
    category_name: {
      type: DataTypes.STRING, // set as STRING
      allowNull: false, // don't allow NULL values
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
