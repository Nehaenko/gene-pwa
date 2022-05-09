const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    // Add targetable
    const useCategoryContent = targetables.module(
        '@magento/peregrine/lib/talons/RootComponents/Category/useCategoryContent.js'
    );

    const remove = './categoryContent.gql';
    const switchCategoryContentInstruction = {
        after: "import DEFAULT_OPERATIONS from '",
        remove: remove.length,
        insert: 'src/core-overrides/talons/RootComponents/Category/categoryContent.gql.js'
    };

    useCategoryContent.spliceSource(switchCategoryContentInstruction);

    useCategoryContent.insertBeforeSource(
        'return {',
        '\n const categoryDisplayMode = categoryData\n' +
        '        ? categoryData.categories.items[0].display_mode\n' +
        '        : null;\n'
    );

    // Add return
    useCategoryContent.insertAfterSource(
        'categoryName,',
        'categoryDisplayMode,'
    );
};
