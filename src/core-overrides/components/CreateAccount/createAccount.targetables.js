const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const CreateAccount = targetables.reactComponent(
        '@magento/venia-ui/lib/components/CreateAccount/createAccount.js'
    );

    // Add import for our custom CSS classes
    CreateAccount.addImport(
        `import localClasses from 'src/core-overrides/components/CreateAccount/createAccount.module.css'`
    );

    // Update the useStyle() method to inject our additional custom css
    CreateAccount.insertAfterSource(
        'const classes = useStyle(defaultClasses, ',
        'localClasses, '
    );
};
