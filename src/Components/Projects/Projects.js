import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import Project1 from "./GitHub.jpg";
import Project2 from "./LBV.gif";
import Project3 from "./GnR.jpg";

const StyledProjects = styled.div`
  text-align: center;
  align-content: center;
  font-size: 50px;
  font-family: "Lato", sans-serif;
  letter-spacing: 2px;
  padding: 10px;
  margin: 50px 0px;

  h1 {
    padding-bottom: 40px;
    text-align: center;
    display: inline-flex;
  }

  .card {
    width: 20rem;
    height: 100%;
    font-size: 22px;
    border-color: grey;

    display: inline-block;
  }
  .around-card {
    margin: 20px 5px;
  }
  .card-body {
    font-size: 18px;
    color: black !important;
    letter-spacing: 1px;
    margin: 10px;
  }
  .card-image-top {
    width: 400px;
    height: 500px;
  }

  #button-deployed {
    font-size: 20px;
    border: none;
    margin-bottom: 20px;
    color: white;
    background-color:black;
   
    width: 300px;
  }

  #button-deployed:hover {
    transition: ease-in-out 0.3s;
    opacity: 0.7;
    background-color: #170571;
  }

  #button-repo {
    font-size: 20px;
    border: none;
    margin-top: 20px;
    margin-bottom: 20px;
    color: white;
    width: 300px;

    background-color: black;
  }

  #button-repo:hover {
    transition: ease-in-out 0.3s;
    opacity: 0.7;
    background-color: #1d4a08;
  }
`;

function Projects() {
  return (
    <StyledProjects>
      <Container fluid={true}>
        <Row>
          <Col>
            <h1>PORTFOLIO</h1>
          </Col>
        </Row>
      </Container>

      {/*Card 1*/}
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col className="around-card">
            <div class="card">
              <img
                class="card-img-top"
                src={Project3}
                alt="left brain vibes link"
                target="_blank"
                href="https://patrickpresley.com"
              />
              <div class="card-body">
                <p class="card-text">
                  A simple landing page built with React, Gatsby, and Styled
                  Components. I love building quick static sites!
                </p>
              </div>
              <a
                href="https://github.com/carriepresley/patrickpresley"
                className="btn btn-primary"
                id="button-repo"
                alt="Click here to see the project on GitHub"
              >
                Repo on GitHub
              </a>
              <a
                href="https://patrickpresley.com"
                className="btn btn-primary"
                id="button-deployed"
                alt="Click here to see the deployed project"
              >
                Deployed on Netlify
              </a>
            </div>
          </Col>

          {/*Card 2*/}
          <Col className="around-card">
            <div class="card">
              <img
                class="card-img-top"
                src={Project2}
                alt="left brain vibes link"
                target="_blank"
                href="https://leftbrainvibes.com"
              />
              <div class="card-body">
                <p class="card-text">
                  Left Brain Vibes, my first React & JavaScript and side project
                  of building creative, interactive tutorials.
                </p>
              </div>
              <a
                href="https://github.com/carriepresley/leftbrainvibes"
                className="btn btn-primary"
                id="button-repo"
                alt="Click here to see the project on GitHub"
              >
                Repo on GitHub
              </a>
              <a
                href="https://leftbrainvibes.com"
                className="btn btn-primary"
                id="button-deployed"
                alt="Click here to see the deployed project"
              >
                Deployed on Netlify
              </a>
            </div>
          </Col>

          {/*Card 3*/}
          <Col className="around-card">
            <div class="card">
              <img
                class="card-img-top"
                src={Project1}
                alt="left brain vibes link"
                target="_blank"
                href="https://axios-api-github.netlify.app/"
              />
              <div class="card-body">
                <p class="card-text">
                  I'm learning & building with different API's. Here's a recent
                  list of my GitHub repo's using the GitHub API.
                </p>
              </div>
              <a
                href="https://github.com/carriepresley/githubapi"
                className="btn btn-primary"
                id="button-repo"
                alt="Click here to see the project on GitHub"
              >
                Repo on GitHub
              </a>
              <a
                href="https://axios-api-github.netlify.app/"
                className="btn btn-primary"
                id="button-deployed"
                alt="Click here to see the deployed project"
              >
                Deployed on Netlify
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledProjects>
  );
}

export default Projects;
