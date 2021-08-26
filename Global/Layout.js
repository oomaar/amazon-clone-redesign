import { ThemeProvider } from "styled-components";
import { Footer, SearchBar, Sidebar } from "../components";
import { darkTheme, GlobalStyle, lightTheme, theme } from "./GlobalStyle";
import { useSelector } from 'react-redux';
import { selectDark } from "../Redux/slices/darkSlice";

const Layout = ({ children }) => {
    const darkValue = useSelector(selectDark);

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