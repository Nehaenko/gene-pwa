const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const productIndex = targetables.reactComponent(
        '@magento/venia-ui/lib/RootComponents/Product/index.js'
    );

    const remove = './product';
    const switchCategoryInstruction = {
        after: "export { default } from '",
        remove: remove.length,
        insert: 'src/core-overrides/RootComponents/Product/product.js'
    };

    productIndex.spliceSource(switchCategoryInstruction);
};
