import React from "react"

import feature from "../images/feature.png"
import manWithBoxes from "../images/manWithBoxes.jpg"
import wasteClearance from "../images/wasteClearance.jpg"
import sofa from "../images/sofa.png"
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
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Clearmoov man and Van</h3>
        <p style={{ color: COLORS.gray }}>
        Man and Van is ideal for small moves, you can choose how much of the service you need. We provide any packing materials you need, as well as a home cleaning service. 
        </p>
      </div>
      <div>
        <img style={{ margin:'20px',height:'200px'}} src={manWithBoxes} alt="a blank card floating over colorful graphics" />
      </div>
    </content>
    
    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Local & National Removals</h3>
        <p style={{ color: COLORS.gray }}>
          We provide a personal service and ensure customer service is our highest priority.
          <br/>
          Over the years we have honed are craft to ensure moves go smoothly and professionally.
        </p>
      </div>
      <div>
        <img style={{ margin:'20px',height:'200px'}} src={sofa} alt="a blank card floating over colorful graphics" />
      </div>
    </content>

    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>Waste Clearance</h3>
        <p style={{ color: COLORS.gray }}>
        As fully licensed waste carriers we know how to dispose of your rubish the correct way. 
        There is a reason for all of the undercutting on prices for waste disposal and 9/10 times it's because the waste is not being disposed of correctly or legally.
        </p>
      </div>
      <div>
        <img style={{ margin:'20px',height:'200px'}} src={wasteClearance} alt="a blank card floating over colorful graphics" />
      </div>
    </content>

    <content
      style={{
        display: "grid",
        alignItems: "center",
        justifyContent: "center",
        gridTemplateColumns: "repeat(auto-fit, minmax(240px, 340px))",
      }}
    >
      <div>
        <h3>House Clearance</h3>
        <p style={{ color: COLORS.gray }}>
          Having to clear a house for whatever reason can be a stressful process, our goal is to minimise this and have
          created a second to none service.<br/>
          Whether it be a Probate, eviction, garage or shed we have the solution for you.
        </p>
      </div>
      <div>
        {/* <img src={feature} alt="a blank card floating over colorful graphics" /> */}
      </div>
    </content>
  </div>
)

export default Content
