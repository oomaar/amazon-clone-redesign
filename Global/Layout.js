import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Footer, SearchBar, Sidebar } from "../components";
import { darkTheme, GlobalStyle, lightTheme, theme } from "./GlobalStyle";

const Layout = ({ children }) => {
    const [darkMode, setDarkMode] = useState('light');

    return (
        <ThemeProvider theme={theme}>
            <ThemeProvider theme={darkMode === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />
                <Sidebar darkMode={darkMode} />
                <SearchBar darkMode={darkMode} />
                {children}
                <Footer darkMode={darkMode} />
            </ThemeProvider>
        </ThemeProvider>
    );
};

export default Layout;
