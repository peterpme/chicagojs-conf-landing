import React from 'react'
import Link from 'gatsby-link'

const headerDivStyles = {
  margin: '40px auto',
  textAlign: 'center',
  zIndex: 1,
}

const headerStyles = {
  fontFamily: 'Inconsolata, mono',
  color: 'white',
  fontSize: 120,
  fontWeight: 700,
  margin: '0 0 30px 0'
}

const buttonStyles = {
  fontFamily: 'Inconsolata, mono',
  fontWeight: 400,
  fontSize: 22,
  backgroundColor: '#66bbe5',
  color: '#fff',
  borderRadius: 4,
  padding: 15,
  textDecoration: 'none'
}

const inline = {
  display: 'inline-block',
  margin: '0 5px'
}

const Button = ({ label, href }) => (
  <a style={buttonStyles} rel="nofollow" href={href} title={label} target="_blank">{label}</a>
)

const IndexPage = () => (
  <header style={headerDivStyles}>
    <h1 style={headerStyles}>ChicagoJS Conf</h1>
    <nav>
      <ul style={{ listStyle: 'none'}}>
        <li style={inline}>
          <Button label="Volunteer" href="https://goo.gl/forms/u5gyIxMZNZKAlSKr2"/>
        </li>
        <li style={inline}>
          <Link style={buttonStyles} to="/mailing-list">Subscribe</Link>
        </li>
      </ul>
    </nav>
  </header>
)

export default IndexPage
