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
    line-height: 50px;
    letter-spacing: 0.5px;
   
  }
  .about-me{
    background-color: #dbca5e;
    padding: 100px 30px 20px 30px;
    margin-top: -100px;
    color: black !important;
    border-radius: 7px;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
  
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 0px;
    }
    h2 {
      padding-top: 10px;
      font-size: 20px;
      line-height: 30px;
    }
    img{
      margin-top: -70px;
      
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
      
      
    <div className = "about-me"> <h2>
        I'm a self-taught software developer who loves creating things,
        educating humans, and dancing to old-school hip hop.
      </h2></div>
     
    </StyledAboutMeWords>
  );
}

export default AboutMeWords;
