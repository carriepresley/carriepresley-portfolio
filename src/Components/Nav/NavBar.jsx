import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';
import "../../../src/index.css";

const Nav = styled.nav`
  width: auto;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  margin: 30px;
  display: flex;
  justify-content: space-between;
  animation: fadeInAnimation ease 3s;
  animation-iteration-count:1;
  animation-fill-mode: forwards;

  @keyframes fadeInAnimation {
      0%{
          opacity: 0;
      }
      100%{ 
          opacity: 1;
      }
  }


  .logo {
    padding: 0px 0px;
    font-family: 'Montserrat', sans-serif;
    font-size: 33px;
    letter-spacing: 1px;
  }

`

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">
        CARRIE PRESLEY
      </div>
      <Burger />
    </Nav>
  )
}

export default Navbar