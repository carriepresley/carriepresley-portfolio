import React from "react";
import styled from "styled-components";
import image1 from "./img0.jpg";
import image2 from "./img2.jpg";
import image3 from "./img3.jpg";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import { Container } from "react-bootstrap";

const StyledProjects = styled.div`
  .body {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

    
  }
  .box {
    width: 1200px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    grid-gap: 15px;
    margin: 0 auto;
    cursor: pointer;
  }
  .card {
    position: relative;
    width: 300px;
    height: 350px;
    background:  #cdeae7;
    margin: 0 auto;
    border-radius: 4px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  }

  .card:before,
  .card:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 4px;
    background: #fff;
    transition: 0.5s;
    z-index: -1;
  }

  .card:hover:before {
    transform: rotate(20deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }
  .card:hover:after {
    transform: rotate(10deg);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
  }

  .card .imgBox {
    position: absolute;
    top: 10px;
    left: 10px;
    bottom: 10px;
    right: 10px;
    background: #222;
    transition: 0.5s;
    z-index: 1;
  }

  .card:hover .imgBox {
    bottom: 80px;
  }

  .card .imgBox img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .details {
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    line-height: 50px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    letter-spacing: 1px;
    color: black !important;
  }
  h1 {
    text-align: center;
    font-size: 40px;
    font-family: "Montserrat", sans-serif;
    letter-spacing: 3px;
    padding-bottom: 50px;
    padding-top: 50px;
    
  }
  h2 {
    font-size: 18px;
    margin: 0;
    padding: 0;

   
   
    color: black !important;
  }


  .card .details {
    position: absolute;
    left: 10px;
    right: 10px;
    bottom: 10px;
    height: 60px;
    text-align: center;
    display: block;
  }

  .card .details h2 span {
    line-height: 16px;
   
    font-size: 12px;
    display: block;
    margin-top: 2px;
  }

  @media (max-width: 768px) {
    padding-top: 0px;

    .card .imgBox {
      bottom: 80px;
    }

    .box{
      grid-gap: 25px;
    }
  }
`;

function Projects() {
  return (
    <StyledProjects>
      <Container>
        <Row className="justify-content-center" s={12} xl={12}>
          <Col className="justify-content-center" s={12} xl={12}>
            <h1>SERVICES</h1>
          </Col>
        </Row>

        <div className="body">
          <div className="box">
            <div className="card">
              <div className="imgBox">
                <img src={image1} />
              </div>
              <div className="details">
                <h2>
                  SOFTWARE DEVELOPMENT<br></br>
                  <span className ="description">Developing financial solutions and streamlining systems</span>
                </h2>
              </div>
            </div>

            <div className="card">
              <div className="imgBox">
                <img src={image2} />
              </div>
              <div className="details">
                <h2>
                  ACCOUNTING<br></br>
                  <span>Providing strategic planning for your cryptocurrency assets</span>
                </h2>
              </div>
            </div>

            <div className="card">
              <div className="imgBox">
                <img src={image3} />
              </div>
              <div className="details">
                <h2>
                  EDUCATION<br></br>
                  <span>Presentating on the future of DeFi</span>
                </h2>
              </div>
            </div>
          </div>
        </div>
        <div id="contactme"></div>
      </Container>
    </StyledProjects>
  );
}

export default Projects;
