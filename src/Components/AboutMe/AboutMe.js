import React from "react";
import Card from "./Card";
import AboutMeWords from "./AboutMeWords";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styled from "styled-components";

const StyledAboutMe = styled.div`
    padding: 0px;
    padding-top: 100px;
    padding-bottom: 100px;


   
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
      padding-top: 50px;

    }

`;

function AboutMe() {
  return (
    <StyledAboutMe>
      <Container fluid={true}>
        <Row className="justify-content-center" md={12}>
          <Col className="d-flex justify-content-center" md={6} xl={4}>
            <Card />
          </Col>
          <Col
            className="d-flex justify-content-center"
            id="text-right"
            md={6}
            xl={7}
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
