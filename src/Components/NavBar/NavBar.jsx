import React from "react";
import styled from "styled-components";


const Nav = styled.nav`
  width: 100%;
  height: 48px;
  padding: 5px 20px 20px 20px;
  display: flex;
  justify-content: space-between;
  list-style: none;
  border-bottom: 1px solid grey;
font-family: "Montserrat", sans-serif;
font-size:20px;
line-height: 50px;
letter-spacing: 0.5px;
  .logo {
    
    font-size: 25px;
    line-height: 50px;
    letter-spacing: 0.5px;
    text-decoration: line-through
  }
 ul{
   list-style-type: none;
   justify-content: center;
 }
  li {
    padding: 18px 20px;
    cursor: pointer;
    color: black;
    display: inline;
  
  }
  a {
    text-decoration: none;
    color: grey;
  }
  a:hover {
    opacity: 0.8;
    transition: transform 0.7s ease-in-out;
  }
  @media (max-width: 768px) {
    ul{
      display: none;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">CARRIE PRESLEY</div>
      <div>
        <ul>
       
          <li>
            <a href="#portfolio">SERVICES</a>
          </li>
          <li>
            <a href="#contactme">CONTACT</a>
          </li>
        </ul>
      </div>
    </Nav>
  );
};

export default Navbar;
