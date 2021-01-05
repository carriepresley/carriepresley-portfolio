import React from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import {Row} from "react-bootstrap";
import {Col} from "react-bootstrap";

const StyledContactMe = styled.div `

   text-align: center;
    padding-top: 50px;
    padding-bottom: 50px;
    font-size: 50px;
    font-family: 'Lato', sans-serif;
    letter-spacing: 3px;
    text-transform: uppercase;
    background-color: #000000;
    color: white !important;


   
    #submitbutton{
        background-color: #0000cc;
        border-color: black;
        color: white;
        font-family: 'Montserrat', sans-serif; 
        font-size: 18px;
    }

`;




function ContactForm(){

    function submitFunction(){
        document.getElementById("submitbutton").style.backgroundColor = '#ff6699';
        document.getElementById("submitbutton").style.borderColor = '#000000';

        document.getElementById("submitbutton").value = "Message Sent";
    }

    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm("gmail", "cpdefault", e.target, "user_VcklK9HxPHeGjLES1nCnV")
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()
      }




    return (
        <StyledContactMe>
        <Container>
        <Row className = "justify-content-center" s = {12} xl = {12}>
        <Col className = "justify-content-center" s = {12} xl = {12}>
        <h1>
                Contact Me
            </h1>
           
        </Col>   
        </Row>
        </Container>
        
            <div className ='container'>
                <form onSubmit ={sendEmail}>
                <div className='row pt-5 mx-auto'>
                    <div className='col-8 form-group mx-auto'>
                        <input type='text' className='form-control' placeholder='Name' name ='name'/>
                    </div>
                    <div className='col-8 form-group pt-2 mx-auto'>
                        <input type='email' className='form-control' placeholder='Email' name ='email'/>
                    </div>
                    <div className='col-8 form-group pt-2 mx-auto'>
                        <input type='text' className='form-control' placeholder='Subject' name ='subject'/>
                    </div>
                    <div className='col-8 form-group pt-2 mx-auto'>
                        <textarea className='form-control' id = "" cols = '33' rows = '7' placeholder='Message' name ='message'></textarea>
                    </div>
                    <div className ='col-8 pt-3 mx-auto'>
                        <input type='submit' className= 'btn btn-info' value='Send Message' id ='submitbutton' onClick = {submitFunction}></input>
                    </div>
                </div>
                </form>
            </div>
        

</StyledContactMe>
    )
}
   


export default ContactForm;