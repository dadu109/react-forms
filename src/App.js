import React from "react";
import FormikForm from "./views/FormikForm";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *,*::before,*::after{
    box-sizing:border-box;
  }
  body {
      margin:0;
      padding:0;
      font-family: 'Nunito', sans-serif;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <div className="App">
        <FormikForm />
      </div>
    </>
  );
}

export default App;
