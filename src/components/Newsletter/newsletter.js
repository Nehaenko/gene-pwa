import React, { useEffect } from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { Form } from 'informed';
import { shape, string } from 'prop-types';

import { useNewsletter } from '@magento/peregrine/lib/talons/Newsletter/useNewsletter';
import { useToasts } from '@magento/peregrine';

import { isRequired } from '@magento/venia-ui/lib/util/formValidators';
import { useStyle } from '@magento/venia-ui/lib/classify';
import FormError from '@magento/venia-ui/lib/components/FormError';
import Field from '@magento/venia-ui/lib/components/Field';
import LoadingIndicator from '@magento/venia-ui/lib/components/LoadingIndicator';
import TextInput from '@magento/venia-ui/lib/components/TextInput';
import LinkButton from '@magento/venia-ui/lib/components/LinkButton';
import Shimmer from '@magento/venia-ui/lib/components/Newsletter/newsletter.shimmer';
import defaultClasses from './newsletter.module.css';
import arrowIcon from '../../icons/down-arrow.png';
import SocialIcons from '../Footer/SocialIcons';

const Newsletter = props => {
    const { formatMessage } = useIntl();
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = useNewsletter();
    const [, { addToast }] = useToasts();
    const {
        isEnabled,
        newsletterTitle,
        newsletterContent,
        errors,
        handleSubmit,
        isBusy,
        isLoading,
        setFormApi,
        newsLetterResponse,
        clearErrors
    } = talonProps;

    useEffect(() => {
        if (newsLetterResponse && newsLetterResponse.status) {
            addToast({
                type: 'success',
                message: formatMessage({
                    id: 'newsletter.subscribeMessage',
                    defaultMessage: 'The email address is subscribed.'
                }),
                timeout: 5000
            });
        }
    }, [addToast, formatMessage, newsLetterResponse]);

    if (isLoading) {
        return <Shimmer />;
    }

    if (!isEnabled) {
        return null;
    }

    const maybeLoadingIndicator = isBusy ? (
        <div className={classes.loadingContainer}>
            <LoadingIndicator>
                <FormattedMessage
                    id={'newsletter.loadingText'}
                    defaultMessage={'Subscribing'}
                />
            </LoadingIndicator>
        </div>
    ) : null;

    return (
        <div className={classes.root} data-cy={'Newsletter-root'}>
            {maybeLoadingIndicator}
            <span data-cy="Newsletter-title" className={classes.title}>
                <p>{newsletterTitle}</p>
            </span>

            <p
                data-cy="Newsletter-infoText"
                className={classes.newsletter_text}
            >
                <p>{newsletterContent}</p>
            </p>
            <FormError
                allowErrorMessages
                errors={Array.from(errors.values())}
            />
            <Form
                getApi={setFormApi}
                className={classes.form}
                onSubmit={handleSubmit}
            >
                <Field
                    id="email"
                    label={formatMessage({
                        id: 'global.email',
                        defaultMessage: 'Email'
                    })}
                >
                    <TextInput
                        autoComplete="email"
                        field="email"
                        id="email"
                        placeholder="Enter your email address"
                        validate={isRequired}
                    />
                </Field>
                <LinkButton
                    data-cy="Newsletter-submitButton"
                    className={classes.subscribe_link}
                    type="submit"
                    disabled={isBusy}
                    onClick={clearErrors}
                >
                    <img src={arrowIcon} alt="arrow-icon" />
                </LinkButton>
            </Form>
            <SocialIcons />
        </div>
    );
};

Newsletter.propTypes = {
    classes: shape({
        modal_active: string,
        root: string,
        title: string,
        form: string,
        buttonsContainer: string
    })
};

export default Newsletter;
