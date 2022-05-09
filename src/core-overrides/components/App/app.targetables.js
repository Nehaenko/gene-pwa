const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    const App = targetables.reactComponent(
        '@magento/venia-ui/lib/components/App/app.js'
    );

    // Add global styles
    const removeStyles = '../../index.module.css';

    const switchStyleInstruction = {
        after: "import globalCSS from '",
        insert: '/src/index.module.css',
        remove: removeStyles.length
    };

    App.spliceSource(switchStyleInstruction);

    const removeNavigation = '../Navigation';

    const switchNavigationInstruction = {
        after: "import Navigation from '",
        insert: '/src/components/Navigation',
        remove: removeNavigation.length
    };

    App.spliceSource(switchNavigationInstruction);

    const removeMain = '../Main';

    const switchMainInstruction = {
        after: "import Main from '",
        insert: '/src/components/Main',
        remove: removeMain.length
    };

    App.spliceSource(switchMainInstruction);
};
