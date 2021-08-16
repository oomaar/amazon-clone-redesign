import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Footer, SearchBar, Sidebar } from "../components";
import { darkTheme, GlobalStyle, lightTheme, theme } from "../Global/GlobalStyle";

export default function App({ Component, pageProps }) {
  const [darkMode, setDarkMode] = useState('light');

  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={darkMode === 'light' ? lightTheme : darkTheme}>
        <div>
          <GlobalStyle />
          <Sidebar darkMode={darkMode} />
          <SearchBar darkMode={darkMode} />
          <Component {...pageProps} />
          <Footer darkMode={darkMode} />
        </div>
      </ThemeProvider>
    </ThemeProvider>
  );
};
