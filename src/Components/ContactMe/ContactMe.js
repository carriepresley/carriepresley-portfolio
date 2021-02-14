import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Twitter from "./twitter.png";
import Insta from "./insta.png";
import LinkedIn from "./linkedin.png";
import Cardboard from "./cardib.png";


const Ul = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
 


  

  li {
    padding: 10px 40px;
    
  .top-li{
  
    width: 33px;

  }
    
   
  }
  .socials {
    width: 33px;
    

  }

  .socials:hover{
    opacity: 0.75;
  }

  img{
  width: 100%;
  height: auto;
}

 
  }
`;


const StyledContactMe = styled.div`
  text-align: center;
  padding-top: 200px;
  padding-bottom: 100px;
  font-size: 50px;
  font-family: "Montserrat", sans-serif;
  letter-spacing: 3px;

  



  #submitbutton {
    border-color: whitesmoke;
    color: white;
    font-family: "Montserrat", sans-serif;
    font-size: 20px;
background: #034387;

  }

  #submitbutton:hover {
    opacity: 0.75;
    transition: ease-in-out 0.3s;
    
  }
 

  h2 {
    font-family: "Montserrat", sans-serif;
    font-size: 30px;
    line-height: 50px;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100%;
    letter-spacing: 1px;
  }
  
  @media (max-width: 768px) {
    h1 {
      font-size: 40px;
    }
    h2 {
      font-size: 22px;


   
    
  }

  
`;

function ContactForm() {
  function submitFunction() {
    document.getElementById("submitbutton").style.backgroundColor = "#212121";
    document.getElementById("submitbutton").style.borderColor = "#000000";

    document.getElementById("submitbutton").value = "Message Sent";
  }

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "cpdefault", e.target, "user_VcklK9HxPHeGjLES1nCnV")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }

  return (
    <StyledContactMe>
    
    
      <Container >
        <Row className="justify-content-center" s={12} xl={12}>
          <Col className="justify-content-center" s={12} xl={12}>
          
          <h1 >CONTACT ME</h1>
  
         
       
        
            
           
          </Col>
          
          <Col>
         


          <Ul>
      <li >
        <a
          target="_blank"
          href="https://twitter.com/carriepresley15"
          rel="noreferrer"
          
        >
          <img src={Twitter} alt="carrie presley twitter link" className= "top-li"></img>
        </a>
      </li>

      <li>
        <a
          target="_blank"
          href="https://www.instagram.com/carriepresley/"
          rel="noreferrer"
          
        >
          <img src={Insta} alt="carrie presley github link" className="socials"></img>
        </a>
      </li>

      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/carriepresley/"
          rel="noreferrer"
          
        >
          <img src={LinkedIn} alt="carrie presley linked in" className="socials"></img>
        </a>
      </li>
    </Ul>
          </Col>
        </Row>
        
      </Container>

      <div className="container">
        <form onSubmit={sendEmail}>
          <div className="row pt-5 mx-auto">
            <div className="col-8 form-group mx-auto">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  name="name"
                  label = "name"
                />
            </div>
            <div className="col-8 form-group pt-2 mx-auto">

                <input
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  name="email"
                  label = 'email'
                />
             
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
             
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                  name="subject"
                  label = "subject"
                />
              
            </div>
            <div className="col-8 form-group pt-2 mx-auto">
             
                <textarea
                  className="form-control"
                  id=""
                  cols="33"
                  rows="7"
                  placeholder="Message"
                  name="message"
                  label = "message to Carrie"
                ></textarea>
          
            </div>
            <div className="col-8 pt-3 mx-auto">
              <input
                type="submit"
                className="btn btn-info"
                value="Send Message"
                id="submitbutton"
                label = "submit button"
                onClick={submitFunction}
              ></input>
            </div>
          </div>
        </form>
      </div>
    </StyledContactMe>
  );
}

export default ContactForm;
