import React from 'react';
import { usePaymentIcons } from '../../../talons/Footer/PaymentIcons/usePaymentIcons';
import { useStyle } from '@magento/venia-ui/lib/classify';
import maestro from './icons/maestro.svg';
import mastercard from './icons/mastercard.svg';
import payPal from './icons/pay-pal.svg';
import visa from './icons/visa.svg';
import defaultClasses from '../footer.module.css';

const PaymentIcons = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = usePaymentIcons();
    const { data } = talonProps;

    const PaymentIcons = data
        ? Object.keys(data).map(function(key) {
              if (data[key] === '1') {
                  return (
                      <span key={key} className={classes.paymentIcon}>
                          <img
                              alt="payment-icon"
                              src={
                                  key === 'maestro'
                                      ? maestro
                                      : key === 'mastercard'
                                      ? mastercard
                                      : key === 'paypal'
                                      ? payPal
                                      : visa
                              }
                          />
                      </span>
                  );
              }
          })
        : null;

    return <div className={classes.paymentIconsContainer}>{PaymentIcons}</div>;
};

export default PaymentIcons;
