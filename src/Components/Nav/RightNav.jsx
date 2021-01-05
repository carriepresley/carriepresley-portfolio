import React from 'react';
import styled from 'styled-components';
import GitHub from "./github.png";
import LinkedIn from "./linkedin.png";
import Twitter from "./twitter.png";



const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  li {
    padding: 18px 10px;
  }

  img:hover{
    width: 110%;
    height: auto;
    transition: ease-in-out 1.0s;
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
    li {
      color: #fff;
      margin-left: 38px;
    }
    
  }
`;

const RightNav = ({ open }) => {
  return (
      
    <Ul open={open}>
      <li><a target="_blank" href="https://github.com/carriepresley"><img src={GitHub} alt= 'carrie presley github link' ></img></a></li>

      <li><a target="_blank" href="https://twitter.com/carriepresley15"><img src={Twitter} alt= 'carrie presley twitter link'></img></a></li>

      <li><a target="_blank" href=""><img src={LinkedIn}></img></a></li>
     
    </Ul>
    
  )
}

export default RightNav