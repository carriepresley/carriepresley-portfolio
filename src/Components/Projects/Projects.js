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
    margin: 20px 5px;
    font-size: 50px;

    .project-image{
        width: 400px;
        height: 500px;
        padding: 33px;
    }
    
`;

function Projects (){
    return (
        <StyledProjects>
        <Container fluid = {true}>
            <Row>
                <Col>
                    <h1>
                        Projects
                    </h1>
                </Col>
            </Row>
        </Container>
        <Container fluid = {true}>
            <Row className = "justify-content-center">
                <Col s = {12} md = {6} lg = {4}>
                <a target="_blank" href="https://github.com/carriepresley"><img src={Project1} alt= 'carrie presley github link' className = "project-image"></img></a>
                </Col>

                <Col s = {12} md = {6} lg = {4}>
                <a target="_blank" href="https://github.com/carriepresley"><img src={Project2} alt= 'carrie presley github link' className = "project-image"></img></a>
                </Col>

                <Col s = {12} md = {6} lg = {4}>
                <a target="_blank" href="https://github.com/carriepresley"><img src={Project3} alt= 'carrie presley github link' className = "project-image"></img></a>
                </Col>

            </Row>
        </Container>
        </StyledProjects>
    )
}

export default Projects;


