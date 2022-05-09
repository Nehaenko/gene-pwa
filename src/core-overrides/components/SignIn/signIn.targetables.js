const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const SignIn = targetables.reactComponent(
        '@magento/venia-ui/lib/components/SignIn/signIn.js'
    );

    // Add import for our custom CSS classes
    SignIn.addImport(
        `import localClasses from 'src/core-overrides/components/SignIn/signIn.module.css'`
    );

    // Update the useStyle() method to inject our additional custom css
    SignIn.insertAfterSource(
        'const classes = useStyle(defaultClasses, ',
        'localClasses, '
    );
};
