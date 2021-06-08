import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Header from '../Header';
import Footer from '../Footer';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arimo';
    -webkit-font-smoothing: antialiased;
    overflow-x: hidden;
    max-width: 100%;
  }

  button{
    cursor: pointer;
    outline: none;
  }

  a{
    text-decoration: none;
  }

  #gatsby-focus-wrapper{
    position: relative;
    height: 100vh;
  }
`;
export function Layout({ children }) {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
      <Footer />
    </>
  );
}
