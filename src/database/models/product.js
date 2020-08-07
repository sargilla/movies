'use strict';
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    name: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    text: DataTypes.STRING,
    image: DataTypes.STRING,
    price: DataTypes.FLOAT,
    published: DataTypes.BOOLEAN
  }, {});
  Product.associate = function(models) {
    Product.belongsTo(models.Category, {
      as: 'category',
    });
  };
  return Product;
};