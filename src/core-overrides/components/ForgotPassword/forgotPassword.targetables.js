const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const ForgotPassword = targetables.reactComponent(
        '@magento/venia-ui/lib/components/ForgotPassword/forgotPassword.js'
    );

    const ForgotPasswordForm = targetables.reactComponent(
        '@magento/venia-ui/lib/components/ForgotPassword/ForgotPasswordForm/forgotPasswordForm.js'
    );

    // Add import for our custom CSS classes
    ForgotPassword.addImport(
        `import localClasses from 'src/core-overrides/components/ForgotPassword/forgotPassword.module.css'`
    );

    // Update the useStyle() method to inject our additional custom css
    ForgotPassword.insertAfterSource(
        'const classes = useStyle(defaultClasses, ',
        'localClasses, '
    );

    // Add import for our custom CSS classes
    ForgotPasswordForm.addImport(
        `import localClasses from 'src/core-overrides/components/ForgotPassword/ForgotPasswordForm/forgotPasswordForm.module.css'`
    );

    // Update the useStyle() method to inject our additional custom css
    ForgotPasswordForm.insertAfterSource(
        'const classes = useStyle(defaultClasses, ',
        'localClasses, '
    );
};
