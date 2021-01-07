import React from "react";
import styled from "styled-components";
import Insta from "./insta.png";
import LinkedIn from "./linkedin.png";
import Twitter from "./twitter.png";
import TikTok from "./tiktok.png";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  
  

  li {
    padding: 10px 33px;
    
    
    
   
  }
  .socials {
    width: 40px;
    

  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: whitesmoke;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
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
      <li>
        <a
          target="_blank"
          href="https://twitter.com/carriepresley15"
          rel="noreferrer"
          
        >
          <img src={Twitter} alt="carrie presley twitter link" className="socials"></img>
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
  );
};

export default RightNav;
