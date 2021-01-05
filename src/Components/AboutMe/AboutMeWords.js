import React from "react";
import "../../../src/index.css";
import styled from "styled-components";


const StyledAboutMeWords = styled.div`
    h2{
        font-family: 'Montserrat', sans-serif; 
        }

  h1{
    font-family: 'Archivo Black', sans-serif;
    font-size: 33px;
  }

`;

function AboutMeWords(){
    return (
        <StyledAboutMeWords>
        <h1>Hey, what's up? I'm Carrie.</h1>
        <h2> I'm working on this portfolio, practicing JavaScript, React, Styled Components.....

        </h2>
          
           </StyledAboutMeWords>
    )
}

export default AboutMeWords;