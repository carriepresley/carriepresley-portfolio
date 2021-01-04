import React from "react";
import Card from "./Card";
import AboutMeWords from "./AboutMeWords";
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";
import styled from "styled-components";

const StyledAboutMe =styled.div`
    padding: 0px;
    margin: 5px 5px;

    .card-image {
        text-align: center;   

    }

`;

function AboutMe  (){
    return ( 
        <StyledAboutMe>
        <Container fluid = {true}>
        <Row className= "justify-content-center">
            <Col className = "card-image" s = {12} md = {6} l = {6} xl = {3} >
            <Card/>
            </Col>
            <Col className ="text-left" s = {12} md = {6} l= {6} xl = {8} >
                <AboutMeWords/>
           </Col>
        </Row>
        </Container>  
        </StyledAboutMe>  
    )
   
}

export default AboutMe;