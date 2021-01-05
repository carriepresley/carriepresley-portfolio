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
    font-family: 'Lato', sans-serif;
    letter-spacing: 3px;
    padding-top: 10px;


    h1{
        padding-bottom: 10px;
    }
  
  .card{
    width: 20rem;
    font-size: 22px;
    border-color: white;
    border-width: 7px;
  }

 

  .card-body{
      font-size: 18px;
      color: black !important;
      letter-spacing: 1px;

  }
  .card-image-top{
      width: 400px;
      height: 500px;
  }

    #button{
        background-color: #0000cc;
        margin-bottom: 50px;

}

#button:hover{
      opacity: 0.75;
      transition: ease-in-out 0.3s;

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

        {/*Card 1*/}
        <Container fluid = {true} >
            <Row className = "justify-content-center">

            <Col>
        <div class="card" >
            
        <img class="card-img-top" src={Project3} alt="left brain vibes link" target="_blank" href="https://patrickpresley.com"/>
            <div class="card-body">
                <p class="card-text">LANDING PAGE built with Gatsby and React.
                </p>
            </div>
            <a href="https://patrickpresley.com" class="btn btn-primary" id="button">Check it out!</a>
        </div>
        </Col>
 
    {/*Card 2*/}
    <Col>
        <div class="card" >
            
        <img class="card-img-top" src={Project2} alt="left brain vibes link" target="_blank" href="https://leftbrainvibes.com"/>
            <div class="card-body">
                <p class="card-text">LEFT BRAIN VIBES built with JavaScript & React.
                </p>
            </div>
            <a href="https://leftbrainvibes.com" class="btn btn-primary" id="button">Check it out!</a>
        </div>
        </Col>    

    {/*Card 3*/}           
    <Col>
        <div class="card" >
            
        <img class="card-img-top" src={Project1} alt="left brain vibes link" target="_blank" href="https://axios-api-github.netlify.app/"/>
            <div class="card-body">
                <p class="card-text">GITHUB project built with Axios and GitHub API.
                </p>
            </div>
            <a href="https://axios-api-github.netlify.app/" class="btn btn-primary" id="button">Check it out!</a>
        </div>
        </Col>


            </Row>
        </Container>
        </StyledProjects>
    )
}

export default Projects;


