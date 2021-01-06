import React from "react";
import styled from "styled-components";
import Burger from "./Burger";
import "../../../src/index.css";

const Nav = styled.nav`
  margin-top: 20px;
  margin-bottom: 20px;
  width: auto;
  height: 55px;
  border-bottom: solid 0.01px grey;
  display: flex;
  justify-content: space-between;
  animation: fadeInAnimation ease 3s;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;

  @keyframes fadeInAnimation {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  .logo {
    padding: 10px 0px;
    font-family: "Montserrat", sans-serif;
    font-size: 33px;
    letter-spacing: 1px;
    margin-left: 20px;

    @media (max-width: 768px) {
      display: flex;
      font-size: 28px;
    }
  }
`;

const Navbar = () => {
  return (
    <Nav>
      <div className="logo">CARRIE PRESLEY</div>
      <Burger />
    </Nav>
  );
};

export default Navbar;
