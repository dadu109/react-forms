import React, { useState } from "react";
import styled from "styled-components";

const Burger = styled.button`
  position: absolute;
  background: transparent;
  border: none;
  padding: 35px;
  z-index: 4;
  outline-color: ${props => (props.open ? "#fff" : "#15e198")};

  span {
    display: block;
    width: 33px;
    height: 4px;
    margin-bottom: 5px;
    position: relative;
    background: ${props => (props.open ? "#fff" : "#15e198")};
    border-radius: 3px;
    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;

    &:first-child {
      transform-origin: 0% 0%;
      transform: ${props =>
        props.open ? " rotate(45deg) translate(1px, -1px)" : null};
    }
    &:nth-last-child(2) {
      opacity: ${props => (props.open ? 0 : 1)};
      transform: ${props => (props.open ? "rotate(0deg) scale(0.2, 0.2)" : 0)};
    }
    &:last-child {
      transform-origin: 0% 100%;
      transform: ${props =>
        props.open ? "rotate(-45deg) translate(-2px, 4px)" : 0};
    }
  }
`;

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  .cover {
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: -100vw;
    transition: background-color 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
    background-color: ${props =>
      props.open ? "rgba(50, 50, 50, 0.7)" : "none"};
    transform: ${props => (props.open ? "translateX(100vw)" : "none")};
  }
`;

const Menu = styled.div`
  z-index: 3;
  width: 100vw;
  height: 100vh;
  background: #15e198;
  max-width: 414px;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  transform: ${props => (props.open ? "translateX(0)" : "translateX(-100%)")};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  a {
    text-decoration: none;
    color: #fff;
    font-size: 2em;
    font-weight: bold;
    padding: 10px;
    position: relative;
    &::before {
      content: "";
      position: absolute;
      top: 100%;
      left: 50%;
      width: 0;
      height: 4px;
      background-color: #fff;
      transform: translateX(-50%);
      transition: width 0.2s cubic-bezier(0.77, 0.2, 0.05, 1);
    }
    &:hover::before {
      width: 100%;
    }
  }
`;

const BurgerMenu = ({ children }) => {
  const [open, setOpen] = useState(false);
  return (
    <Wrapper open={open}>
      <Menu open={open}>{children}</Menu>
      <Burger
        onClick={() => {
          setOpen(!open);
        }}
        open={open}
      >
        <span />
        <span />
        <span />
      </Burger>
      <div className="cover" />
    </Wrapper>
  );
};

export default BurgerMenu;
