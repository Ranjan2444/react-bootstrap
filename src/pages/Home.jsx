import React from "react";
import { NavLink } from "react-router-dom";
import Common from "../components/Common";
import homesvg from "../images/homesvg.svg";

function Home() {
  return (
    <>
      <Common
        name="Introduce yourself to the world through"
        imgsrc={homesvg}
        visit="/service"
        btname="Get Started"
      />
    </>
  );
}

export default Home;
