import React from 'react';
import { useStyle } from '@magento/venia-ui/lib/classify';
import defaultClasses from './usp.module.css';
import { useUsp } from '../../talons/UspBanners/useUsp';
import { Link } from 'react-router-dom';
import delivery from './icons/delivery.svg';
import singUp from './icons/sing-up.svg';
import guarentee from './icons/guarentee.svg';
import time from './icons/time.svg';

const Usp = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = useUsp();
    const { data } = talonProps;

    return (
        <div className={classes.uspBannersContainer}>
            <div className={classes.uspBlocks}>
                <div className={classes.uspBanner}>
                    <Link
                        to={data?.header_usp_1_link}
                        className={classes.uspBannerLink}
                    >
                        <img alt="usp-icon" src={delivery} />
                        <span>{data?.header_usp_1}</span>
                    </Link>
                </div>

                <div className={classes.uspBanner}>
                    <Link
                        to={data?.header_usp_2_link}
                        className={classes.uspBannerLink}
                    >
                        <img alt="usp-icon" src={singUp} />
                        <span>{data?.header_usp_2}</span>
                    </Link>
                </div>

                <div className={classes.uspBanner}>
                    <Link
                        to={data?.header_usp_3_link}
                        className={classes.uspBannerLink}
                    >
                        <img alt="usp-icon" src={guarentee} />
                        <span>{data?.header_usp_3}</span>
                    </Link>
                </div>

                <div className={classes.uspBanner}>
                    <Link
                        to={data?.header_usp_4_link}
                        className={classes.uspBannerLink}
                    >
                        <img alt="usp-icon" src={time} />
                        <span>{data?.header_usp_4}</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Usp;
