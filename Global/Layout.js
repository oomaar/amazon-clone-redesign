import { ThemeProvider } from "styled-components";
import { Footer, SearchBar, Sidebar } from "../components";
import { darkTheme, GlobalStyle, lightTheme, theme } from "./GlobalStyle";
import { useSelector } from 'react-redux';

const Layout = ({ children }) => {
    const darkValue = useSelector(state => state.dark.dark);

    return (
        <ThemeProvider theme={theme}>
            <ThemeProvider theme={darkValue === 'light' ? lightTheme : darkTheme}>
                <GlobalStyle />
                <Sidebar />
                <SearchBar />
                {children}
                <Footer />
            </ThemeProvider>
        </ThemeProvider>
    );
};

export default Layout;
