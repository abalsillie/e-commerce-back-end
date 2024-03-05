// import important parts of sequelize library
const { Model, DataTypes } = require("sequelize");
// import our database connection from config.js
const sequelize = require("../config/connection");

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define ID column
    id: {
      type: DataTypes.INTEGER, // set as INTEGER
      allowNull: false, // don't allow NULL values
      primaryKey: true, // set as primary key
      autoIncrement: true, // auto increment
    },
    // define product_name column
    product_name: {
      type: DataTypes.STRING, // set as STRING
      allowNull: false, // don't allow NULL values
    },
    // define price column
    price: {
      type: DataTypes.DECIMAL, // set as DECIMAL
      allowNull: false, // don't allow NULL values
      validate: {
        isDecimal: true, // validation
      },
    },
    // define stock column
    stock: {
      type: DataTypes.INTEGER, // set as INTEGER
      allowNull: false, // don't allow NULL values
      defaultValue: 10, // default value to 10
      validate: {
        isNumeric: true, // validation
      },
    },
    // define category_id column
    category_id: {
      type: DataTypes.INTEGER, // set as INTEGER
      references: {
        model: "category", // reference the category model's id
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "product",
  }
);

module.exports = Product;
