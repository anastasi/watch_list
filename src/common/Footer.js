import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  border-top: 1px solid #80808026;
  width: 100%;
  height: 5rem;
  background-color: white;
  bottom: 0;
  p {
    text-align: center;
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&#169; 2019 Daniel Wellington AB</p>
    </FooterContainer>
  );
};

export default Footer;
