import React, { useEffect } from "react";
import Carousel from "../components/Carousel/Carousel"
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import ReactGA from "react-ga";

const Homepage = () => {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  });
  return (
    <>
      <Hero />
      <Carousel />
      <About />
      <Contact />
    </>
  );
};

export default Homepage;
