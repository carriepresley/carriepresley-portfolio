import React from "react";
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import styled from "styled-components";
import Project1 from "./Project1.jpg";
import Project2 from "./Project2.gif";
import Project3 from "./Project3.jpg";

const StyledProjects = styled.div`
    text-align: center;
    margin: 50px 5px;
    font-size: 50px;
    font-family: 'Montserrat', sans-serif; 
    text-transform: uppercase;

    .container-project {
  position: relative;
  width: 50%;
}

.image {
  width: 400px;
    height: 500px;
    padding: 33px;
}

.overlay {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 500px;
  width: 400px;
  opacity: 0;
  transition: .5s ease;
  background-color: #008CBA;
}

.container-project:hover .overlay {
  opacity: 1;
}

.text {
  color: white;
  font-size: 20px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
}

    .project-image{
        
    }
    
`;

function Projects (){
    return (
        <StyledProjects>
        <Container fluid = {true}>
            <Row>
                <Col>
                    <h1>
                        PORTFOLIO
                    </h1>
                </Col>
            </Row>
        </Container>
        <Container fluid = {true}>
            <Row className = "justify-content-center">
                <Col s = {12} md = {6} lg = {4}>
                <div className = "container-project">
                <a target="_blank" href="https://github.com/carriepresley"><img src={Project1} alt= 'carrie presley github link' className = "project-image"></img></a>
                <div className = "overlay"></div>
                <div className = "text">Project</div>
                </div>
                </Col>

                <Col s = {12} md = {6} lg = {4}>
                <div className = "container-project">
                <a target="_blank" href="https://github.com/carriepresley"><img src={Project2} alt= 'carrie presley github link' className = "project-image"></img></a>
                <div className = "overlay"></div>
                <div className = "text">Project</div>
                </div>
                </Col>

                <Col s = {12} md = {6} lg = {4}>
                <div className = "container-project">
                <a target="_blank" href="https://github.com/carriepresley"><img src={Project3} alt= 'carrie presley github link' className = "project-image"></img></a>
                <div className = "overlay"></div>
                <div className = "text">Project</div>
                </div>
                </Col>

            </Row>
        </Container>
        </StyledProjects>
    )
}

export default Projects;


