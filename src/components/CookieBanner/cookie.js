import React from 'react';
import { useCookie } from '../../talons/Cookie/useCookie';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './cookie.module.css';
import CookieConsent from 'react-cookie-consent';

const Cookie = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = useCookie();
    const { data } = talonProps;

    return (
        <div className={classes.cookieContainer}>
            {data ? (
                <CookieConsent
                    buttonText="Accept All Cookies"
                    style={{
                        color: '#343434',
                        background: '#fff',
                        border: '1px solid #343434'
                    }}
                    buttonStyle={{
                        background: '#fff',
                        color: '#343434',
                        border: '1px solid #343434',
                        borderRadius: '10px',
                        fontSize: '14px',
                        padding: '15px',
                        fontWeight: '600',
                        textTransform: 'uppercase'
                    }}
                >
                    {data.message}
                </CookieConsent>
            ) : null}
        </div>
    );
};

export default Cookie;
