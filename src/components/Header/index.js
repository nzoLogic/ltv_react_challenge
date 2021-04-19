import React from 'react';
import styled from 'styled-components';

const StyledNav = styled.nav`
  border-bottom: 1px solid rgb(231, 235, 240);
`;

const Header = () => (
  <StyledNav className="navbar navbar-expand-lg navbar-light bg-light">
    <p className="navbar-brand">LTV Challenge</p>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  </StyledNav>
);
export default Header;
