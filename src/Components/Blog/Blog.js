import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import styled from "styled-components";
import Blog1 from "./Blog_1/blog_1.png";
import Blog_1 from "./Blog_1/Blog_1";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
    width: 22rem;
    height: 100%;
    font-size: 22px;
    opacity: 0.9;
    display: inline-block;

    border-radius: 10px;
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    transition: ease-in-out 0.3s;
  }

  .card:hover {
    box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
    transition: ease-in-out 0.3s;
    opacity: 1.0;
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

  .card-text {
    font-size: 18px;
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
      <Router>
      <Container fluid={true}>
        <Row className="justify-content-center">
          <Col className="around-card">
            <div className="card-con">
              <Link to="/blog"/>
                <Route path="/blog" exact component={Blog_1} />
                <div class="card">
                  <img
                    class="card-img-top"
                    src={Blog1}
                    alt="left brain vibes link"
                  />
                  <div class="card-body">
                    <p class="card-text">
                      MacBook setup for front-end software development!
                    </p>
                  </div>
                </div>
              
            </div>
          </Col>
        </Row>
      </Container>
      </Router>
    </StyledBlog>
  );
}

export default Blog;



