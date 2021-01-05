import React from "react";
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import styled from "styled-components";
import Project1 from "./GitHub.jpg";
import Project2 from "./LBV.gif";
import Project3 from "./GnR.jpg";


const StyledProjects = styled.div`
    text-align: center;
    margin: 50px 5px;
    font-size: 50px;
    font-family: 'Montserrat', sans-serif; 

    .project-desc{
        font-size: 22px;
        margin: 10px 20px;
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
               <a target="_blank" href="https://patrickpresley.com/"><img src={Project3} alt= 'carrie presley github link' className = "image"></img></a>
               <div className = 'project-desc'> Making static landing pages and blogs with Gatsby & React is my jam. </div>
               </Col>
               
                <Col s = {12} md = {6} lg = {4}>
               <a target="_blank" href="https://leftbrainvibes.com"><img src={Project2} alt= 'left brain vibes' className = "image"></img></a>
               <div className = 'project-desc'> Left Brain Vibes, a project created with React, JavaScript, and a plethora of fun dependencies. </div>
                </Col>

                <div></div>
                <Col s = {12} md = {6} lg = {4}>
               <a target="_blank" href="https://axios-api-github.netlify.app/"><img src={Project1} alt= 'axios api practice' className = "image"></img></a>
               <div className = 'project-desc'> Check out what I'm working on right now in GitHub!</div>
                </Col>


            </Row>
        </Container>
        </StyledProjects>
    )
}

export default Projects;


