const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const AccountMenu = targetables.reactComponent(
        '@magento/venia-ui/lib/components/AccountMenu/accountMenu.js'
    );

    const AccountMenuItems = targetables.reactComponent(
        '@magento/venia-ui/lib/components/AccountMenu/accountMenuItems.js'
    );

    // Add import for our custom CSS classes
    AccountMenu.addImport(
        `import localClasses from 'src/core-overrides/components/AccountMenu/accountMenu.module.css'`
    );

    // Update the useStyle() method to inject our additional custom css
    AccountMenu.insertAfterSource(
        'const classes = useStyle(defaultClasses, ',
        'localClasses, '
    );

    // Add import for our custom CSS classes
    AccountMenuItems.addImport(
        `import localClasses from 'src/core-overrides/components/AccountMenu/accountMenuItems.module.css'`
    );

    // Update the useStyle() method to inject our additional custom css
    AccountMenuItems.insertAfterSource(
        'const classes = useStyle(defaultClasses, ',
        'localClasses, '
    );
};
