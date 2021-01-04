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
        <h2> Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book.

        </h2>
          
           </StyledAboutMeWords>
    )
}

export default AboutMeWords;