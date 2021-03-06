import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.css'

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="ChicagoJS Conference | Summer 2018"
      meta={[
        {
          name: 'description',
          content:
            'ChicagoJS Conference coming to Chicago Summer of 2018',
        },
        { name: 'keywords', content: 'javascript, conference, chicago, tech' },
      ]}
      link={[
        {
          href: 'https://fonts.googleapis.com/css?family=Oswald:300,400',
          rel: 'stylesheet',
        },
      ]}
    />
    <div
      style={{
        height: '100vh',
        backgroundImage:
          'url(http://res.cloudinary.com/peterpme/image/upload/q_80,f_auto,w_1400/v1504819892/hero-bg.jpg)',
        backgroundSize: 'cover',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 0,
          background: 'rgba(0, 24, 82, 0.69)',
        }}
      />
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
