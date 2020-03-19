import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
  font-weight: 800;
  font-size: 48px;
  margin: 42px 0;
  text-align: center;
`;

const Heading = ({ children }) => <StyledHeading>{children}</StyledHeading>;

export default Heading;
