import React from 'react';
import { useSocial } from '../../../talons/Footer/SocialIcons/useSocial';
import { useStyle } from '@magento/venia-ui/lib/classify';
import facebook from './icons/facebook.svg';
import instagram from './icons/instagram.svg';
import pinterest from './icons/pinterest.svg';
import twitter from './icons/twitter.svg';
import vimeo from './icons/vimeo.svg';
import youtube from './icons/youtube.svg';
import { Link } from 'react-router-dom';
import defaultClasses from '../footer.module.css';

const SocialIcons = props => {
    const classes = useStyle(defaultClasses, props.classes);
    const talonProps = useSocial();
    const { data } = talonProps;

    const SocialIcons = data
        ? Object.keys(data).map(function(key, index) {
              if (index >= 2 && data[key] !== null) {
                  return (
                      <Link key={data[key]} title={data[key]} to={data[key]}>
                          <span className={classes.socialIcon}>
                              <img
                                  alt={key}
                                  src={
                                      key === 'facebook'
                                          ? facebook
                                          : key === 'instagram'
                                          ? instagram
                                          : key === 'pinterest'
                                          ? pinterest
                                          : key === 'twitter'
                                          ? twitter
                                          : key === 'vimeo'
                                          ? vimeo
                                          : youtube
                                  }
                              />
                          </span>
                      </Link>
                  );
              }
          })
        : null;

    return <div className={classes.socialIconsContainer}>{SocialIcons}</div>;
};

export default SocialIcons;
