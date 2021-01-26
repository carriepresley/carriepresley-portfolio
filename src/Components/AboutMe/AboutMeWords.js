import React from "react";
import "../../../src/index.css";
import styled from "styled-components";

const StyledAboutMeWords = styled.div`
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;

  
  
  
  h1 {
    font-family: "Abril Fatface", cursive;
    font-size: 60px;
    letter-spacing: 1px;
    
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 40px;
    line-height: 70px;
    font-weight: lighter;
    letter-spacing: 0.5px;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 30px;
      line-height: 40px;
    }
    padding-bottom: 0px;
    margin-bottom: 0px;
  }
`;

function AboutMeWords() {
  return (
    <StyledAboutMeWords>
    <div
    data-aos="fade-left"
          data-aos-delay="20"
          data-aos-duration="1000"
      >
    <h1>Hey, what's up? </h1>
    <h1>I'm Carrie. </h1>
    </div>
      
      
      <br></br>
      <h2>
        I'm a self-taught software developer who loves creating things,
        educating humans, and dancing to old-school hip hop.
      </h2>
    </StyledAboutMeWords>
  );
}

export default AboutMeWords;
