import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Page from '../../src/components/Page';

import 'react-lazy-load-image-component/src/effects/blur.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'react-image-lightbox/style.css';
import 'aos/dist/aos.css';
import Favicon from '../../src/assets/images/Kodifly_logomark_full_color.svg'

export default function TopLayout(props) {
  return (
    <React.Fragment>
      <Helmet>
        <meta charSet="utf-8" />
        <link
          rel="shortcut icon"
          href={Favicon}
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Kodifly | AI and Software Solutions with Innovation. | Hong Kong</title>
        <meta name="theme-color" content="#ffffff" />
        <meta
          name="description"
          content="Kodifly | AI, Tecnology, Software Solution | Dedicated by technology professional background into digital solutions and training. Kodifly provides services about digitising enterprises with innovative ideas and strong executing power, modern design of solution for promoting your organizational goals."
        />
        <meta
          name="robots"
          content="max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://assets.maccarianagency.com/screenshots/the-front/social.png"
        />
        <meta
          property="og:title"
          content="Kodifly | AI and Software Solutions with Innovation. | Hong Kong"
        />
        <meta
          property="og:description"
          content="Kodifly | AI, Tecnology, Software Solution | Dedicated by technology professional background into digital solutions and training. Kodifly provides services about digitising enterprises with innovative ideas and strong executing power, modern design of solution for promoting your organizational goals."
        />
        <meta
          property="og:url"
          content="https://kodifly.com/"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap" rel="stylesheet" />
      </Helmet>
      <Page>
        {props.children}
      </Page>
    </React.Fragment>
  );
}

TopLayout.propTypes = {
  children: PropTypes.node,
};
