const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const ProductSort = targetables.reactComponent(
        '@magento/venia-ui/lib/components/ProductSort/productSort.js'
    );

    // Add import for our custom CSS classes
    ProductSort.addImport(
        `import localClasses from 'src/core-overrides/components/ProductSort/productSort.module.css'`
    );

    // Update the useStyle() method to inject our additional custom css
    ProductSort.insertAfterSource(
        'const classes = useStyle(defaultClasses, ',
        'localClasses, '
    );
};
