import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import Blog1 from "./Blog_1/blog_1.png";

const StyledBlog = styled.div`
  text-align: center;
  align-content: center;
  font-size: 50px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 2px;
  padding: 75px 10px 100px 10px;
  margin: 50px 0px;
  background-color: #e0e0e0;
  color: black !important;

  h1 {
    padding-bottom: 40px;
    text-align: center;
    display: inline-flex;
  }

  .card {
    width: 20rem;
    height: 100%;
    font-size: 22px;

    display: inline-block;

    border-radius: 10px;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;

    transition: ease-in-out 0.3s;
  }

  .card:hover {
  width: 20rem;
  height: 100%;
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
`;

function Blog() {
  return (
    <StyledBlog>
      <Container fluid={true}>
        <Row>
          <Col>
            <h1>RECENT POSTS</h1>
          </Col>
        </Row>
      </Container>

      {/*Card 1*/}
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col className="around-card">
            <div className="card-con">
              <a
                href="https://patrickpresley.com"
                target="_blank"
                className="custom-card"
                rel="noreferrer"
              >
                <div class="card">
                  <img
                    class="card-img-top"
                    src={Blog1}
                    alt="left brain vibes link"
                  />
                  <div class="card-body">
                    <p class="card-text">MacBook setup for coding!</p>
                  </div>
                </div>
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </StyledBlog>
  );
}

export default Blog;
