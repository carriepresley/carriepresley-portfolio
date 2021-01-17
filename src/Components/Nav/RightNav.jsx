import React from "react";
import styled from "styled-components";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;
  margin-top: 10px;
  
  

  .list-item {
    padding: 40px 20px;
    margin: 10px;
    color: grey;
    font-family: "Montserrat", sans-serif;
    font-size: 24px;
    text-decoration: none;
  }

  .list-item:hover {
    color: blue;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: whitesmoke !important;
    position: absolute;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 150px;
    width: 200px;
    padding: 10px;
    justify-content: space-around;
    margin: 0px;

    .list-item {
      padding: 0px;

      font-size: 24px;
      text-decoration: none;
    }
  }
`;

const RightNav = ({ open }) => {
  return (
    <Ul open={open}>
      <li>
        <a href="#portfolio" className="list-item" id="top-item">
          Portfolio
        </a>
      </li>

      <li>
        <a href="#blog" className="list-item">
          Blog
        </a>
      </li>
      <li>
        <a href="#contactme" className="list-item">
          {" "}
          Contact
        </a>
      </li>
    </Ul>
  );
};

export default RightNav;
