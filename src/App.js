import React from "react";
import logo from "./logo.svg";
import styled from "styled-components";
import { BigTitle } from "./components/titles";
import './App.css';

const PageWrapper = styled.div`
  position:fixed;
  padding:0;
  margin:0;
  top:0;
  left:0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(315deg, #C1C8E4, #84CEEB);
`;

function App() {
  return (
    <PageWrapper>
      <BigTitle style={{ "text-align": "center" }}>ANQI HUANG</BigTitle>
    </PageWrapper>
  );
}

export default App;
