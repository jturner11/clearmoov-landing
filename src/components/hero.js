import React from "react"
import PropTypes from "prop-types"

import Button from "../components/button"
import headerImage from "../images/header.png"
import MockupContent from "./image"
import clearmoovLogoWhite from "../images/clearmoovLogoWhite.png"

const Header = ({ siteTitle }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      flexDirection: "column",
      padding: "4rem 1rem",
    }}
  >
    <div
      style={{
        backgroundColor: '#4885ed',
        backgroundImage: `url(${headerImage})`,
        position: "absolute",
        top: 0,
        zIndex: -5,
        height: "75vh",
        width: "100vw",
        opacity: 0.9,
      }}
    />
    <div
      style={{
        margin:"30px",
        width: "300px",
        top: 0,
      }}
    >
      <img
        src={clearmoovLogoWhite}
        alt="outlines of shapes and confetti in the background "
      />
    </div>
      <h3 style={{fontFamily: 'ProximaNova,Montserrat,sans-serif', color:'white'}}>Move anything anywhere with Clearmoov</h3>
      <h3 style={{ textAlign: "center", maxWidth: 440, color: 'white', opacity:'1', fontFamily: 'ProximaNova,Montserrat,sans-serif', color:'white'}}>
        The UK’s favourite delivery, removals and transport marketplace
      </h3>
    <Button>Contact us</Button>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
