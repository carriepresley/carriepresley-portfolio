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
  
  margin: -50px;
  margin-top: -100px;
      width: 200px;
      

}
  


  
  
  
  h1 {
    font-family: "Montserrat", sans-serif;
    
    font-size: 40px;
    letter-spacing: 1px;
    
  }
  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    line-height: 43px;
    letter-spacing: 0.5px;
   
    font-weight: 400;
  }
  .about-me{
    background-color: #afb934;
    padding: 30px 30px 20px 30px;
    margin-top: -30px;
    color: black !important;
    border-radius: 0px;
    box-shadow: 0px 10px 30px -5px rgba(0, 0, 0, 0.3);
    transition: box-shadow 0.5s;
  
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 0px;
    }
    h2 {
      padding-top: 0px;
      font-size: 20px;
      line-height: 30px;
    }
    img{
      margin-top: -100px;
      margin-left: 1px;
      width: 200px;
      
    }
    .about-me{
      padding-top: 60px;
      
     
    }


    @media (max-width: 480px){
      h2{
        font-size: 20px;
        padding-top: 0px;
        margin-top: -20px;
      }
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
        As a software developer & accountant, I'm learning and educating others about the future of #DeFi
      </h2></div>
     
    </StyledAboutMeWords>
  );
}

export default AboutMeWords;
