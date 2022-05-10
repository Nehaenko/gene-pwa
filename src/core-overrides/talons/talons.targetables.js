/* eslint-disable */
function talonsIntercept(targets) {
    const useNewsletter = require('./Newsletter/useNewsletter.targetables');
    useNewsletter(targets);

    const useCategoryContent = require('./RootComponents/Category/useCategoryContent.targetables');
    useCategoryContent(targets);

    const useProduct = require('./RootComponents/Product/useProduct.targetables');
    useProduct(targets);
}

module.exports = talonsIntercept;
