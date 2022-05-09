const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const categoryIndex = targetables.reactComponent(
        '@magento/venia-ui/lib/RootComponents/Category/index.js'
    );

    const remove = './category';
    const switchCategoryInstruction = {
        after: "export { default } from '",
        remove: remove.length,
        insert: 'src/core-overrides/RootComponents/Category/category.js'
    };

    categoryIndex.spliceSource(switchCategoryInstruction);
};
