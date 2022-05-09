const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const MiniCart = targetables.reactComponent(
        '@magento/venia-ui/lib/components/MiniCart/miniCart.js'
    );

    // Add import for our custom CSS classes
    MiniCart.addImport(
        `import localClasses from 'src/core-overrides/components/MiniCart/miniCart.module.css'`
    );

    // Update the useStyle() method to inject our additional custom css
    MiniCart.insertAfterSource(
        'const classes = useStyle(defaultClasses, ',
        'localClasses, '
    );
};
