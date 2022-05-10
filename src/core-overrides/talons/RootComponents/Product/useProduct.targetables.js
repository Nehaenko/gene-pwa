const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    // Add targetable
    const useProduct = targetables.module(
        '@magento/peregrine/lib/talons/RootComponents/Product/useProduct.js'
    );

    const remove = './product.gql';
    const switchCategoryContentInstruction = {
        after: "import DEFAULT_OPERATIONS from '",
        remove: remove.length,
        insert: 'src/core-overrides/talons/RootComponents/Product/product.gql'
    };

    useProduct.spliceSource(switchCategoryContentInstruction);
};
