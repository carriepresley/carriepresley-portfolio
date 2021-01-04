import React from "react";
import Card from "./Card";
import {Container, Row, Col} from "react-bootstrap";
import AboutMeWords from "./AboutMeWords";



function AboutMe  (){
    return ( 
        <Container fluid='md'>
        <Row className= "justify-content-center">
            <Col md = {6}>
            <Card/>
            </Col>
            <Col md = {6}>
                <AboutMeWords/>
            </Col>

        </Row>
       

        </Container>
        
       
          
    )
   
}

export default AboutMe;