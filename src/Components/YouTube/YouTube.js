import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styled from "styled-components";

import YouTubeVid from "./YouTubeVid";

const StyledAboutMe = styled.div`
  background-color: #e0e0e0;
  align-items: center;
  justify-content: center;
  padding: 20px 0px;


  h2 {
    font-family: "Lato", sans-serif;
    font-size: 30px;
    line-height: 50px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    letter-spacing: 1px;

    color: black !important;
  }
  @media (max-width: 768px) {

  

    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 22px;
      line-height: 40px;
    }
    padding-top: 1px;
    padding-bottom: 0px;
    
  }

 


  #youtube-row {
    margin: 100px 20px 100px 20px;
  }
  #darkmode-toggle {
    margin: 0px 2px 0px 0px;
    padding: 0px;
    float: right;
    width: 50px;
  }

  #text-right {
    margin: 1em;
    letter-spacing: 1px;
  }

  .YouTube {
    color: red;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
    
  }

  .check-it-out {
    border-style: none;
    color: white;
    font-weight: bold;
    background-color: red;
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    border-radius: 5px;
    width: 200px;
    height: 80px;
    margin-top: 10px;
    text-align: center;
    letter-spacing:1px;

    
  }

  .check-it-out:hover {
    width: 210px;
    height: 90px;
    transition: ease-out 0.3s;
    border-style: none;
    opacity: 0.8;
  }

   
 
`;

function YouTube() {
  return (
    <StyledAboutMe>
      <Container fluid={true}>
        <Row className="justify-content-center" md={12} id="youtube-row">
          <Col md={6} xl={4}>
            <h2>
              Follow along with me on{" "}
              <a
                className="YouTube"
                href="https://www.youtube.com/channel/UCa7fiju8SbHb_wrysviZelw "
              >
                YouTube
              </a>{" "}
              as I share my journey in tech, tutorials, and simple explanations
              to math and programming topics!
              <br></br>
              <button className="check-it-out">Let's go!</button>
            </h2>
          </Col>
          <Col>
          <YouTubeVid/>
          </Col>
        </Row>
      </Container>
    </StyledAboutMe>
  );
}

export default YouTube;
