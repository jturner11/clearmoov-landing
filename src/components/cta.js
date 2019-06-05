import React from "react"

import Button from "../components/button"
import SectionHeader from "./section-header"

const CallToAction = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      // title="Need help ?"
      // description="Lets chat"
      />
      <h2>Lets chat</h2>
      <p style={{ color:"#9AA4A6"}}>Whether you need help with a quote or have a general question, <br/>please call us on the number below and we'll get back to you very quickly during our opening hours.</p>
      <Button>01225 941071</Button>
  </div>
)

export default CallToAction
