import React from "react";
import FormikForm from "./views/FormikForm";
import { createGlobalStyle } from "styled-components";
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
`;

function App() {
  return (
    <Router>
      <GlobalStyle />
      <div className="app">
        <BurgerMenu />
        <Switch className="App">
          {/*  add formik path*/}
          <Route path="/" exact component={FormikForm} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
