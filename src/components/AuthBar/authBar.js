import React from 'react';
import { FormattedMessage, useIntl } from 'react-intl';
import { bool, func, shape, string } from 'prop-types';
import { ArrowRight as ArrowRightIcon } from 'react-feather';

import { useAuthBar } from '@magento/peregrine/lib/talons/AuthBar/useAuthBar';

import { useStyle } from '@magento/venia-ui/lib/classify';
import AccountChip from '@magento/venia-ui/lib/components/AccountChip';
import Icon from '@magento/venia-ui/lib/components/Icon';
import defaultClasses from './authBar.module.css';
import phoneIcon from '../UspBanners/icons/phone-call.svg';
import userIcon from '../UspBanners/icons/sing-up.svg';

const AuthBar = props => {
    const {
        handleShowMyAccount,
        handleSignIn,
        isDisabled,
        isUserSignedIn
    } = useAuthBar(props);
    const { formatMessage } = useIntl();

    const classes = useStyle(defaultClasses, props.classes);

    const fallBackText = formatMessage({
        id: 'authBar.fallbackText',
        defaultMessage: 'Account'
    });

    const buttonElement = isUserSignedIn ? (
        // Show My Account button.
        <button
            className={classes.button}
            disabled={isDisabled}
            onClick={handleShowMyAccount}
        >
            <span className={classes.contents}>
                <AccountChip fallbackText={fallBackText} />
                <span className={classes.icon}>
                    <Icon src={ArrowRightIcon} />
                </span>
            </span>
            <p className={classes.contactLink}>
                <img alt="phone-icon" src={phoneIcon} />
                <span>{'Contact'}</span>
            </p>
        </button>
    ) : (
        // Sign In button.
        <button
            className={classes.button}
            disabled={isDisabled}
            onClick={handleSignIn}
        >
            <span className={classes.contents}>
                <span className={classes.signIn}>
                    <img alt="phone-icon" src={userIcon} />
                    <FormattedMessage
                        id={'authBar.signInText'}
                        defaultMessage={'Sign In'}
                    />
                </span>
                <span className={classes.contactLink}>
                    <img alt="phone-icon" src={phoneIcon} />
                    <span>{'Contact'}</span>
                </span>
            </span>
        </button>
    );

    return <div className={classes.root}>{buttonElement}</div>;
};

export default AuthBar;

AuthBar.propTypes = {
    classes: shape({
        root: string,
        button: string,
        contents: string,
        icon: string,
        signIn: string
    }),
    disabled: bool,
    showMyAccount: func.isRequired,
    showSignIn: func.isRequired
};
