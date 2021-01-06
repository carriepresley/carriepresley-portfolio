import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import ReactPlayer from "react-player";

const StyledAboutMe = styled.div`
    
    background-color: #ddd0be;
    align-items: center;
    justify-content: center;
    padding-bottom: 10px;
    padding-top: 10px;



    h2{
    font-family: 'Lato', sans-serif;
    font-size: 30px;
    line-height: 50px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    margin-top: 20px;
    letter-spacing: 1px;
    
    color: black !important;

    }
    @media (max-width: 768px) {
           h1{
               font-size: 40px;

           } 
           h2{
               font-size: 20px;
               line-height: 30px;
               text-align: center;
               display: flex;
               
           }
           

           
        }
 
  
    #youtube-row{
        margin: 100px 20px 100px 20px;
    }
    #darkmode-toggle{
        margin: 0px 2px 0px 0px;
        padding:0px;
        float:right;
        width: 50px;

        
    }
 
    #text-right{
        margin: 20px 10px 10px 20px;
        letter-spacing: 1px;

    }
 
    .vid-player{

    width:100%
    height:100%
    }

    

`;

function YouTube() {
  return (
    <StyledAboutMe>
      <Container fluid={true}>
        <Row className="justify-content-center" md={12} id="youtube-row">
          <Col md={6} xl={4}>
            <h2>
              Follow along with me on YouTube as I share my journey into tech,
              coding tutorials, and simple explanations to math and programming
              topics!
            </h2>
          </Col>
          <Col
            className="d-flex justify-content-center"
            id="text-right"
            md={6}
            xl={7}
          >
            <div className="vid-wrapper">
              <ReactPlayer
                url="https://www.youtube.com/watch?v=ejqLa48h0pc&t=6s"
                className="vid-player"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </StyledAboutMe>
  );
}

export default YouTube;
