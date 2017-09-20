import React from 'react'
import Link from 'gatsby-link'

const headerDivStyles = {
  margin: '40px auto',
  padding: 10,
  textAlign: 'center',
  zIndex: 1,
}

const infoStyles = {
  maxWidth: 500,
  margin: '40px auto',
  padding: 20,
  fontFamily: "'Oswald', sans-serif",
  fontWeight: 400,
  fontSize: 20,
  color: '#fff',
}

const buttonStyles = {
  fontFamily: "'Oswald', sans-serif",
  fontWeight: 400,
  fontSize: 22,
  backgroundColor: '#66bbe5',
  color: '#fff',
  borderRadius: 4,
  letterSpacing: 1,
  padding: 15,
  textDecoration: 'none',
}

const inline = {
  display: 'inline-block',
  margin: '0 5px',
}

const Button = ({ label, href }) => (
  <a
    style={buttonStyles}
    rel="nofollow"
    href={href}
    title={label}
    target="_blank"
  >
    {label}
  </a>
)

const IndexPage = () => (
  <header style={headerDivStyles}>
    <img
      src="https://res.cloudinary.com/peterpme/image/upload/f_auto,q_100,w_400/v1505917113/logo.png"
      alt="ChicagoJS logo"
    />
    <nav>
      <ul style={{ listStyle: 'none' }}>
        <li style={inline}>
          <Button
            label="Contact & Volunteer"
            href="https://goo.gl/forms/u5gyIxMZNZKAlSKr2"
          />
        </li>
      </ul>
    </nav>
    <div style={infoStyles}>
    <p>We're planning a community-driven Javascript conference here in Chicago and we'd love for you to help! The 2-day conference will include both local and international speakers & guests. Here are some things we need help with:
      <br/>
      <br/>
      <ul style={{ textAlign: 'left'}}>
        <li>Designing a logo</li>
        <li>Coming up with a list of activities for out-of-towners</li>
        <li>Finding sponsors</li>
        <li>Finding local, talented speakers</li>
        <li>Creating a snazzy-looking website</li>
        <li>Helping direct guests the days of the conference</li>
        <li>Running our social media accounts</li>
        <li>The list goes on!</li>
      </ul>
    </p>
    </div>
  </header>
)

export default IndexPage
