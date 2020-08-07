'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING,
    published: DataTypes.BOOLEAN
  }, {});
  Category.associate = function(models) {
    Category.hasMany(models.Product, {
      as: 'products'
    });
  };
  return Category;
};