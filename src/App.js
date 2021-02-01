import React, { useState } from "react";

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
    margin-top: 20px;
    padding-top: 20px;
    margin-right: 20px;
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
     
       
        <Container>
          <Row className="dark-toggle" md={12}>
            <div onClick={themeToggler}>{icon}</div>
          </Row>
        </Container>

        <AboutMe/>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="fade-in-out"
        >
         
        </div>

        <YouTube />

        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="2000"
          data-aos-easing="fade-in-out"
        >
          <Projects />
        </div>

        
          <ContactMe />
        
        <Footer />
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
