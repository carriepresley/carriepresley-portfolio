import React from "react";
import "../../../src/index.css";
import styled from "styled-components";


const StyledAboutMeWords = styled.div`
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;

    h1{
    font-family: 'Abril Fatface', cursive;
    font-size: 60px;
    letter-spacing: 1px;
  } 
    h2{
        font-family: 'Lato', sans-serif;
        font-size: 30px;
        line-height: 50px;
        font-weight: lighter;
        }

        @media (max-width: 768px) {
           h1{
               font-size: 40px;

           } 
           h2{
               font-size: 20px;
               line-height: 30px;
           }
        }
       

`;

function AboutMeWords(){
    return (
        <StyledAboutMeWords>
        <h1>Hey, what's up? I'm Carrie.</h1>
        <br></br>
        <h2>I'm a self-taught software engineer, who loves creating things, educating humans, and dancing to old-school rap music.</h2>
        
           </StyledAboutMeWords>
    )
}

export default AboutMeWords;