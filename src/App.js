import React from "react";
import FormikForm from "./views/FormikForm";
import styled, { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import BurgerMenu from "./components/BurgerMenu";

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{
    box-sizing:border-box;
    
  }
  *::selection{
    background:#15e198;
    color:#fff;
  }
  body {
      margin:0;
      padding:0;
      font-family: 'Nunito', sans-serif;
  }
  .app{
    position:relative;
  }
  .ghlink {
    font-size: 1em !important;
    background:none !important;
    padding:0 !important;
    &:hover{
      color:#fff !important;
    }
  }
`;

const Menu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 50%;

  & > span {
    font-size: 10px;
  }
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="app">
        <BurgerMenu>
          <Menu>
            <Link to="/formik">Formik</Link>
            <Link to="/react-hook-form">React Hook Form</Link>
            <Link to="/redux-form">Redux Form</Link>
          </Menu>
          <span>
            Created with 🤍 by{" "}
            <a
              href="https://github.com/dadu109"
              target="_blank"
              rel="noopener noreferrer"
              className="ghlink"
            >
              Dawid Miczek
            </a>
          </span>
        </BurgerMenu>
        <Switch className="App">
          {/*  add formik path*/}
          <Route path="/" exact component={FormikForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
