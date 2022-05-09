const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const FilterModalOpenButton = targetables.reactComponent(
        '@magento/venia-ui/lib/components/FilterModalOpenButton/filterModalOpenButton.js'
    );

    // Add import for our custom CSS classes
    FilterModalOpenButton.addImport(
        `import localClasses from 'src/core-overrides/components/FilterModalOpenButton/filterModalOpenButton.module.css'`
    );

    // Update the useStyle() method to inject our additional custom css
    FilterModalOpenButton.insertAfterSource(
        'const classes = useStyle(defaultClasses, ',
        'localClasses, '
    );
};
