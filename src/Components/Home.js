import React from "react";
// import styled from "styled-components"
import { Sections } from "./Sections";
import modelS from "../images/model-s.jpg";
import modelThree from "../images/model-3.jpg";
import modelY from "../images/model-y.jpg";
import modelX from "../images/model-x.jpg";
import solarPanels from "../images/solar-panel.jpg";
import solarRoof from "../images/solar-roof.jpg";
import accessories from "../images/accessories.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <Sections
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelThree}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventoery"
      />
      <Sections
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelY}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventoery"
      />
      <Sections
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelS}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventoery"
      />
      <Sections
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg={modelX}
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventoery"
      />
      <Sections
        title="Solar Panels"
        description="Lowest Cost Solar Panels in America"
        backgroundImg={solarPanels}
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Sections
        title="Solar Roof"
        description="Produce Clean Energy From Your Roof "
        backgroundImg={solarRoof}
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Sections
        title="Accessories"
        description=""
        backgroundImg={accessories}
        leftBtnText="Shop Now"
        rightBtnText=""
      />
    </div>
  );
};

export default Home;
