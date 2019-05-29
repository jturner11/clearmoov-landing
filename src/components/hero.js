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
        // backgroundImage: `url(${headerImage})`,
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
        margin:"50px",
        width: "300px",
        top: 0,
      }}
    >
      <img
        src={clearmoovLogoWhite}
        alt="outlines of shapes and confetti in the background "
      />
    </div>
      <p style={{
        textAlign: "center", 
        fontFamily: 'font-family: proxima-nova, "Proxima Nova", sans-serif;',
        color:'white',
        fontSize:'2.3rem',
        fontWeight:'600',
        maxWidth: 550, 
        padding: '4px',
        lineHeight: 1
      }}>
        Move anything anywhere
      </p>
      <p style={{
        textAlign: "center", 
        maxWidth: 550, 
        color: 'white', 
        opacity:'1', 
        fontFamily: 'font-family: proxima-nova, "Proxima Nova", sans-serif;', 
        color:'white', 
        fontSize:'20px',
        fontWeight:'400'
      }}>
        The UK’s favourite delivery, removals and transport company
      </p>
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
