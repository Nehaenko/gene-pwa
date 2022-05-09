const { Targetables } = require('@magento/pwa-buildpack');

module.exports = targets => {
    const targetables = Targetables.using(targets);

    // Add targetable
    const useNewsletter = targetables.module(
        '@magento/peregrine/lib/talons/Newsletter/useNewsletter.js'
    );

    const remove = './newsletter.gql';
    const switchNewsletterInstruction = {
        after: "import DEFAULT_OPERATIONS from '",
        remove: remove.length,
        insert: 'src/core-overrides/talons/Newsletter/newsletter.gql.js'
    };

    useNewsletter.spliceSource(switchNewsletterInstruction);

    useNewsletter.insertBeforeSource(
        'const setFormApi',
        'const newsletterTitle = storeConfigData ? storeConfigData.storeConfig.newsletter_title : null;\n' +
            '\n' +
            '    const newsletterContent = storeConfigData ? storeConfigData.storeConfig.newsletter_content : null;' +
            '\n'
    );

    // Add return
    useNewsletter.insertAfterSource(
        'isEnabled,',
        '\n newsletterTitle,\n' + '        newsletterContent,' + '\n'
    );
};
