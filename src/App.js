import React, { useState } from "react";
import NavBar from "./Components/Nav/NavBar.jsx";
import AboutMe from "./Components/AboutMe/AboutMe";
import YouTube from "./Components/YouTube/YouTube";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme, GlobalStyles } from "./themes.js";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import "./index.css";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

const StyledApp = styled.div` 
  color: ${(props) => props.theme.fontColor};

  .dark-toggle{
    float: right;
    margin-right: 3px;
    padding-top: 10px;
    cursor: pointer;
    transition: ease-in-out  0.5s;

    @media (max-width: 768px) {
   
    margin-top: 0px;
    margin-right:20px;
  }
 

`;

function App() {
  const [theme, setTheme] = useState("light");

  const icon = theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;

  const themeToggler = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };
  return (
    <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <NavBar />
        <Container>
          <Row className="dark-toggle" md={12}>
            <div onClick={themeToggler}>{icon}</div>
          </Row>
        </Container>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <AboutMe />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <YouTube />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="1000"
          data-aos-easing="ease-in-out-cubic"
        >
          <Projects />
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out-cubic"
        >
          <ContactMe />
        </div>
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
