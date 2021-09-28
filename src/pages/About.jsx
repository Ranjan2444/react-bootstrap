import React from "react";
import { NavLink } from "react-router-dom";
import Common from "../components/Common";
import aboutsvg from "../images/aboutsvg.svg";

function About() {
  return (
    <>
      <Common
        name="Welcome to About page of"
        imgsrc={aboutsvg}
        visit="/contact"
        btname="Contact us"
      />
    </>
  );
}

export default About;
