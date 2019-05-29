import React from "react"

import feature from "../images/feature.png"
import SectionHeader from "./section-header"
import { COLORS } from "../styles/constants"

const Content = () => (
  <div style={{ padding: "4rem 1rem", textAlign: "center" }}>
    <SectionHeader
      title="Services"
      description="Clearmoov offer a range of services, see below to find the one you need."
    />
    <content
      style={{
        display: "grid",
        // alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Clearmoov man & Van</h3>
        <p style={{ color: COLORS.gray }}>
        Man and Van is ideal for small moves, you can choose how much of the service you need. We provide any packing materials you need, as well as a home cleaning service. 
        </p>
      </div>
      <div>
        {/* <img src={feature} alt="a blank card floating over colorful graphics" /> */}
      </div>
      <div>
        <h3>Local & National Removals</h3>
        <p style={{ color: COLORS.gray }}>
          We provide a personal service and ensure customer service is our highest priority. 
        </p>
      </div>
      <div>
        {/* <img src={feature} alt="a blank card floating over colorful graphics" /> */}
      </div>
    </content>
  </div>
)

export default Content
