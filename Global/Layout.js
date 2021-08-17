import { useState } from "react";
import { ThemeProvider } from "styled-components";
import { Footer, SearchBar, Sidebar } from "../components";
import { darkTheme, GlobalStyle, lightTheme, theme } from "./GlobalStyle";
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
    const [darkMode, setDarkMode] = useState("");
    const darkValue = useSelector(state => state.dark.dark);

    return (
        <ThemeProvider theme={theme}>
            <ThemeProvider theme={darkValue === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />
                <Sidebar darkMode={darkMode} />
                <SearchBar darkMode={darkMode} setDarkMode={setDarkMode} />
                {children}
                <Footer darkMode={darkMode} />
            </ThemeProvider>
        </ThemeProvider>
    );
};

export default Layout;
