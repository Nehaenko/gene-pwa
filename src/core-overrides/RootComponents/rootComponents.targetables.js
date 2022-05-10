function rootComponentsIntercept(targets) {
    const Category = require('../RootComponents/Category/index.targetables');
    Category(targets);

    const Product = require('../RootComponents/Product/index.targetables');
    Product(targets);
}

module.exports = rootComponentsIntercept;
