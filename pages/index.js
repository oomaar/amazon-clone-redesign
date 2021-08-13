import { useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { HeadTag, Sidebar } from "../components";
import { darkTheme, GlobalStyle, lightTheme, theme } from "../Global/GlobalStyle";

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

          </Main>
        </Application>
      </ThemeProvider>
    </ThemeProvider>
  );
};

const Application = styled.div``;

const Main = styled.main`
  border: 1px solid red;
`;