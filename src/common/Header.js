import React from "react";
import logo from "../assets/logo.png";
import styled from "styled-components";

const Logo = styled.div`
  img {
    display: block;
    margin: 2rem auto;
    width: 5rem;
  }
`;

const Header = () => {
  return (
    <Logo>
      <img src={logo} alt="logo" />
    </Logo>
  );
};

export default Header;
