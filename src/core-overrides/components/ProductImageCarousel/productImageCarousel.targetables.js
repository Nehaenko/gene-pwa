const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const ProductImageCarousel = targetables.reactComponent(
        '@magento/venia-ui/lib/components/ProductImageCarousel/carousel.js'
    );

    // Add import for our custom CSS classes
    ProductImageCarousel.addImport(
        `import localClasses from 'src/core-overrides/components/ProductImageCarousel/carousel.module.css'`
    );

    // Update the useStyle() method to inject our additional custom css
    ProductImageCarousel.insertAfterSource(
        'const classes = useStyle(defaultClasses, ',
        'localClasses, '
    );
};
