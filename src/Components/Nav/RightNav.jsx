import React from 'react';
import styled from 'styled-components';
import Insta from "./insta.png";
import LinkedIn from "./li.png";
import Twitter from "./twitter.png";



const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
    color: #fff;
    margin-left: 38px;
    cursor: pointer;

  }
  .social-li{
    padding-right: 30px;
  }

  
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: whitesmoke;
    position: fixed;
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    top: 0;
    right: 0;
    height: 100vh;
    width: 100px;
    padding-top: 3.5rem;

  
  
  }
`;

const RightNav = ({ open }) => {
  return (
      
    <Ul open={open}>

    <li className = 'socials'><a target="_blank" href="https://twitter.com/carriepresley15" rel="noreferrer"><img src={Twitter} alt= 'carrie presley twitter link'></img></a></li>

      <li className = 'socials'><a target="_blank" href="https://www.instagram.com/carriepresley/" rel="noreferrer"><img src={Insta} alt= 'carrie presley github link' ></img></a></li>

      <li className = 'social-li'><a target="_blank" href="https://www.linkedin.com/in/carriepresley/" rel="noreferrer"><img src={LinkedIn} alt= "carrie presley linked in"></img></a></li>
     
    </Ul>
    
  )
}

export default RightNav;