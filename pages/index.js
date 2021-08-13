import { useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { HeadTag, SearchBar, Sidebar } from "../components";
import { darkTheme, GlobalStyle, lightTheme, mdScreen, theme, xlScreen } from "../Global/GlobalStyle";

export default function Home() {
  const [darkMode, setDarkMode] = useState('light');

  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={darkMode === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Application>
          <HeadTag />

          <Sidebar darkMode={darkMode} />
          <Main>
            <SearchBar darkMode={darkMode} />
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
            <h1>Test</h1>
          </Main>
        </Application>
      </ThemeProvider>
    </ThemeProvider>
  );
};

const Application = styled.div``;

const Main = styled.main`
  max-width: 1024px;

  @media screen and (min-width: ${mdScreen}px) {
    margin: 0 0 0 4.5rem;
  }

  @media screen and (min-width: ${xlScreen}px) {
    margin: 0 auto 0 4.5rem;
  }

  @media screen and (min-width: 1160px) {
    margin: 0 auto;
  }
`;