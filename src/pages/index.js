import React from 'react'
import Link from 'gatsby-link'

const headerDivStyles = {
  margin: '40px auto',
  padding: 10,
  textAlign: 'center',
  zIndex: 1,
}

const infoStyles = {
  fontFamily: "'Oswald', sans-serif",
  fontWeight: 400,
  fontSize: 18,
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
    <img src="https://res.cloudinary.com/peterpme/image/upload/f_auto,q_100,w_400/v1505917113/logo.png" alt="ChicagoJS logo" />
    <br />
    <br />
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
  </header>
)

export default IndexPage
