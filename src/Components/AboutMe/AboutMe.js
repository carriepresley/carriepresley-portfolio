import React from "react";
import AboutMeWords from "./AboutMeWords";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import pic from "./img1.png"

const StyledAboutMe = styled.div`
    padding: 0px;
    padding-top: 90px;
    padding-bottom: 100px;
  
   
    
   .pic{
     width: 400px;
     height: auto;
     margin-top: -70px;
     transform: rotate(-10deg);
   }


   
  }

    #darkmode-toggle{
        margin: 0px 2px 0px 0px;
        padding:0px;
        float:right;
        width: 50px;

        
    }
 
    #text-right{
        margin: 20px 10px 10px 20px;

    }

    @media (max-width: 768px){
      padding-top: 20px;
      padding-bottom: 0px;
      padding-top: 20px;

      .pic{
        width: 300px;
     height: auto;
     margin-top:-30px;
     transform: rotate(-5deg);
   }


   @media (max-width: 480px){
    padding-top: 20px;
      padding-bottom: 0px;
      padding-top: 20px;

      .pic{
        width: 300px;
     height: auto;
     margin-top:-30px;
     transform: rotate(-5deg);
   }

   }
    }
    

`;

function AboutMe() {
  return (
    <StyledAboutMe>
      <Container fluid={true}>
        <Row className="justify-content-center" >
          <Col className="justify-content-center" >
          <img src = {pic} className = "pic"></img>
          </Col>
          <Col
            className="d-flex justify-content-center"
            id="text-right"
            
          >
            <AboutMeWords />
          </Col>
        </Row>
      </Container>
      <div id = "blog"></div>
    </StyledAboutMe>
  );
}

export default AboutMe;
