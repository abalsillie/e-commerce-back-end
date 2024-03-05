const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection");

class ProductTag extends Model {}

ProductTag.init(
  {
    // define id column
    id: {
      type: DataTypes.INTEGER, // set as INTEGER
      allowNull: false, // don't allow NULL values
      primaryKey: true, // set as primary key
      autoIncrement: true, // auto increment
    },
    // define tag_id column
    tag_id: {
      type: DataTypes.INTEGER, // set as INTEGER
      references: {
        model: "tag", // reference 'tag' table
        key: "id", // reference the 'id' column
      },
    },
    // define product_id column
    product_id: {
      type: DataTypes.INTEGER, // set as INTEGER
      references: {
        model: "product", // reference 'product' table
        key: "id", // reference the 'id' column
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product_tag",
  }
);

module.exports = ProductTag;
