import React, { Fragment, Suspense } from 'react';
import { shape, string } from 'prop-types';
import { Link, Route } from 'react-router-dom';

import Logo from '../Logo';
import AccountTrigger from './accountTrigger';
import CartTrigger from './cartTrigger';
import NavTrigger from '@magento/venia-ui/lib/components/Header/navTrigger';
import OnlineIndicator from '@magento/venia-ui/lib/components/Header/onlineIndicator';
import { useHeader } from '@magento/peregrine/lib/talons/Header/useHeader';
import resourceUrl from '@magento/peregrine/lib/util/makeUrl';

import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './header.module.css';
import StoreSwitcher from '@magento/venia-ui/lib/components/Header/storeSwitcher';
import CurrencySwitcher from '@magento/venia-ui/lib/components/Header/currencySwitcher';
import MegaMenu from '../MegaMenu';
import Promo from '../PromotionTab';
import Usp from '../UspBanners/usp';

const SearchBar = React.lazy(() => import('../SearchBar'));

const Header = props => {
    const { hasBeenOffline, isOnline, isSearchOpen, searchRef } = useHeader();

    const classes = useStyle(defaultClasses, props.classes);
    const rootClass = isSearchOpen ? classes.open : classes.closed;

    const searchBarFallback = (
        <div className={classes.searchFallback} ref={searchRef}>
            <div className={classes.input}>
                <div className={classes.loader} />
            </div>
        </div>
    );
    const searchBar = (
        <Suspense fallback={searchBarFallback}>
            <Route>
                <SearchBar isOpen={true} ref={searchRef} />
            </Route>
        </Suspense>
    );

    return (
        <Fragment>
            <div className={classes.switchersContainer}>
                <div className={classes.switchers} data-cy="Header-switchers">
                    <StoreSwitcher />
                    <CurrencySwitcher />
                </div>
            </div>
            <header className={rootClass} data-cy="Header-root">
                <Promo />
                <div className={classes.toolbar}>
                    <div className={classes.primaryActions}>
                        <NavTrigger />
                    </div>
                    <OnlineIndicator
                        hasBeenOffline={hasBeenOffline}
                        isOnline={isOnline}
                    />
                    <Link
                        to={resourceUrl('/')}
                        className={classes.logoContainer}
                    >
                        <Logo classes={{ logo: classes.logo }} />
                    </Link>

                    <div className={classes.isHiddenMobile}>{searchBar}</div>

                    <div className={classes.secondaryActions}>
                        <AccountTrigger />
                        <CartTrigger />
                    </div>
                </div>
            </header>

            <div className={classes.isHiddenDesktop}>{searchBar}</div>
            <MegaMenu />
            <Usp />
        </Fragment>
    );
};

Header.propTypes = {
    classes: shape({
        closed: string,
        logo: string,
        open: string,
        primaryActions: string,
        secondaryActions: string,
        toolbar: string,
        switchers: string,
        switchersContainer: string
    })
};

export default Header;
