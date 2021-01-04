import React from 'react';
import styled from 'styled-components';
import Burger from './Burger';

const Nav = styled.nav`
  width: 100%;
  height: 55px;
  border-bottom: 2px solid #f1f1f1;
  padding: 0 20px;
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
    padding: 15px 0;
    font-family: arial;
    font-size: 24px;
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