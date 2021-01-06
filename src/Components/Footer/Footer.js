import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <div>
      <footer className="mt-5">
        <Container fluid={true}>
          <div className="footer-text">
            <Col className="container text-center p-10 navbar-text col-md-12 col-sm-12 col-xs-12">
              &#169;2021 Carrie Presley &#160;
            </Col>
          </div>
        </Container>
      </footer>
    </div>
  );
}

export default Footer;
