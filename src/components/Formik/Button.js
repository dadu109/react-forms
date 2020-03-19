import React from "react";
import styled from "styled-components";

const StyledButton = styled.button`
  margin-bottom: 20px;
  border: 3px solid #15e198;
  padding: 13px 0;
  width: 100%;
  border-radius: 30px;
  background-color: #fff;
  font-size: 20px;
  cursor: pointer;
  transition: border 0.2s ease-in-out;

  &:hover {
    border: 3px solid #44fff4;
  }
`;

const Button = ({ children }) => (
  <StyledButton type="submit">{children}</StyledButton>
);

export default Button;
