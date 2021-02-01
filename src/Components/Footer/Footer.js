import React from "react";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import styled from "styled-components";


const StyledFooter = styled.div `
 
 margin: 0;
 padding: 0;


.footer-text{
  font-family: "Lato", sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  

}


`;

function Footer() {
  const newYear = new Date();
 

  return (
    <StyledFooter>
      <footer className="mt-5">
        <Container fluid={true}>
          <div className="footer-text">
            <Col className="container text-center p-10 navbar-text col-md-12 col-sm-12 col-xs-12">
              &#169;{newYear.getFullYear()} Carrie Presley &#160;
            </Col>
          </div>
        </Container>
      </footer>
    </StyledFooter>
  );
}

export default Footer;
