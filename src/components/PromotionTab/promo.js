import React from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './promo.module.css';
import { usePromo } from '../../talons/PromoMessage/usePromo';

const Promo = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = usePromo();
    const { storeConfig } = talonProps;

    return (
        <div className={classes.promoMessage}>
            <p className={classes.promoMessageText}>
                {storeConfig?.header_promotion}
            </p>
            <p className={classes.promoMobileMessageText}>
                {storeConfig?.header_promotion_mobile}
            </p>
        </div>
    );
};

export default Promo;
