import React from "react";
import "../../../src/index.css";
import styled from "styled-components";
import Tape from "./tapey.png";


const StyledAboutMeWords = styled.div`
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;


img{
  width: 100%;
  height: auto;
}
  


  
  
  
  h1 {
    font-family: "Montserrat", sans-serif;
    font-weight: 600;
    font-size: 50px;
    letter-spacing: 1px;
    
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    line-height: 70px;
    font-weight: lighter;
    letter-spacing: 0.5px;
   
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
    }
    h2 {
      padding-top: 10px;
      font-size: 30px;
      line-height: 40px;
    }
    img{
      margin-top: -60px;
    }
    
  }
`;

function AboutMeWords() {
  return (
    <StyledAboutMeWords>
    <div className = "tape">
    <div
      data-aos="fade-left"
          data-aos-delay="20"
          data-aos-duration="1000">
            <img src = {Tape}></img>
          </div>
    </div>
      
      
    <div> <h2>
        I'm a self-taught software developer who loves creating things,
        educating humans, and dancing to old-school hip hop.
      </h2></div>
     
    </StyledAboutMeWords>
  );
}

export default AboutMeWords;
