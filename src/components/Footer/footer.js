import React from 'react';
import { shape, string } from 'prop-types';
import { useFooter } from '../../talons/Footer/useFooter';
import {useStyle} from '@magento/venia-ui/lib/classify';
import defaultClasses from './footer.module.css';
import { DEFAULT_LINKS } from '@magento/venia-ui/lib/components/Footer/sampleData';
import Newsletter from '../Newsletter';
import { Link } from 'react-router-dom';
import PaymentIcons from './PaymentIcons';

const Footer = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = useFooter();
    const { data } = talonProps;

    const footerFirstColumnLinks = data ? JSON.parse(data.column_1_links) : [];
    const footerFirstColumnLinkElement = Object.keys(
        footerFirstColumnLinks
    ).map(function(key) {
        return (
            <li>
                <Link
                    key={footerFirstColumnLinks[key]}
                    to={footerFirstColumnLinks[key].link}
                >
                    {footerFirstColumnLinks[key].label}
                </Link>
            </li>
        );
    });

    const footerSecondColumnLinks = data ? JSON.parse(data.column_2_links) : [];
    const footerSecondColumnLinkElement = Object.keys(
        footerSecondColumnLinks
    ).map(function(key) {
        return (
            <li>
                <Link
                    key={footerSecondColumnLinks[key]}
                    to={footerSecondColumnLinks[key].link}
                >
                    {footerSecondColumnLinks[key].label}
                </Link>
            </li>
        );
    });

    const footerThirdColumnLinks = data ? JSON.parse(data.column_3_links) : [];
    const footerThirdColumnLinkElement = Object.keys(
        footerThirdColumnLinks
    ).map(function(key) {
        return (
            <li>
                <Link
                    key={footerThirdColumnLinks[key]}
                    to={footerThirdColumnLinks[key].link}
                >
                    {footerThirdColumnLinks[key].label}
                </Link>
            </li>
        );
    });

    return (
        <footer data-cy="Footer-root" className={classes.root}>
            <div className={classes.links}>
                <div className={classes.callout}>
                    <span className={classes.calloutHeading}>
                        <p>{data?.column_1_title}</p>
                    </span>
                    <ul className={classes.linkGroup}>
                        {footerFirstColumnLinkElement}
                    </ul>
                    <p className={classes.calloutBody}>
                        <p>{data?.column_1}</p>
                    </p>
                </div>
                <div className={classes.callout}>
                    <span className={classes.calloutHeading}>
                        <p>{data?.column_2_title}</p>
                    </span>
                    <ul className={classes.linkGroup}>
                        {footerSecondColumnLinkElement}
                    </ul>
                    <p className={classes.calloutBody}>
                        <p>{data?.column_2}</p>
                    </p>
                </div>
                <div className={classes.callout}>
                    <span className={classes.calloutHeading}>
                        <p>{data?.column_3_title}</p>
                    </span>
                    <ul className={classes.linkGroup}>
                        {footerThirdColumnLinkElement}
                    </ul>
                    <p className={classes.calloutBody}>
                        <p>{data?.column_3}</p>
                    </p>
                </div>
                <div className={classes.callout}>
                    <span className={classes.calloutHeading}>
                        <p>{data?.column_4_title}</p>
                    </span>
                    <p className={classes.calloutBody}>
                        <p>{data?.column_4}</p>
                    </p>
                </div>
                <Newsletter />
            </div>
            <div className={classes.brandingContainer}>
                <div className={classes.branding}>
                    <p className={classes.copyright}>
                        {data?.copyright || null}
                    </p>
                </div>
                <PaymentIcons />
            </div>
        </footer>
    );
};

export default Footer;

Footer.defaultProps = {
    links: DEFAULT_LINKS
};

Footer.propTypes = {
    classes: shape({
        root: string
    })
};
