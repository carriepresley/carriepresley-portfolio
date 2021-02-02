import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import Paper from "./paper.png";
import YouTubeVid from "./YouTubeVid";

const StyledAboutMe = styled.div`
 
  align-items: center;
  justify-content: center;
  padding: 1px 0px;
 
  background-image: url(${Paper});
 background-size: cover;


  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 35px;
    line-height: 50px;
    font-weight: 600;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    letter-spacing: 1px;
    color: black !important;
  margin-left: 40px;



   
  }
  @media (max-width: 768px) {
    #youtube-row {
    }
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 22px;
      line-height: 40px;
      padding: 20px 0px;
    }
    padding-top: 10px;
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
    color: #bf6066;
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
  }

  #check-it-out {
    border-style: none;
    color: white;
    font-weight: bold;
    background-color: #bf6066;
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    border-radius: 5px;
    width: 200px;
    height: 60px;
    letter-spacing: 1px;
  }

  #check-it-out:hover {
    width: 205px;
    height: 62px;
    transition: ease-out 0.3s;
    border-style: none;
    opacity: 0.8;
  }
`;

function YouTube() {
  return (
    <StyledAboutMe>
      <Container fluid={true}>
      <div className = "pseudo"></div>
        <Row className="justify-content-center" md={12} id="youtube-row">
          <Col md={6} xl={6}>
            <h2>
              Follow along with me on{" "}
              <a
              rel = "noreferrer"
                target="_blank"
                className="YouTube"
                href="https://www.youtube.com/carriepresley"
              >
                YouTube
              </a>{" "}
              as I share my journey in tech, tutorials, and simple explanations
              to math and programming topics!
              <br></br>
              <a 
              className = "btn btn-primary"
                id="check-it-out"
                target="_blank"
                href="https://www.youtube.com/carriepresley"
                rel = 'noreferrer'
              >
                Let's go!
              </a>
            </h2>
          </Col>
          <Col md={6} xl={6}>
            <YouTubeVid />
          </Col>
        </Row>
      </Container>
      <div id = "portfolio"></div>
    </StyledAboutMe>
  );
}

export default YouTube;
