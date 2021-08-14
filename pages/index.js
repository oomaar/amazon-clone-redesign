import { useState } from "react";
import styled, { ThemeProvider } from 'styled-components';
import { Banner, Footer, HeadTag, ProductFeed, SearchBar, Sidebar } from "../components";
import { darkTheme, GlobalStyle, lightTheme, mdScreen, theme, xlScreen } from "../Global/GlobalStyle";

export default function Home({ products }) {
  const [darkMode, setDarkMode] = useState('light');

  return (
    <ThemeProvider theme={theme}>
      <ThemeProvider theme={darkMode === 'light' ? lightTheme : darkTheme}>
        <GlobalStyle />
        <Application>
          <HeadTag />

          <Sidebar darkMode={darkMode} />
          <SearchBar darkMode={darkMode} />
          <Main>
            <Banner />
            <ProductFeed products={products} />
          </Main>
          <Footer darkMode={darkMode} />
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

export async function getServerSideProps(context) {
  const products = await fetch("https://fakestoreapi.com/products")
    .then(res => res.json());

  return {
    props: {
      products,
    },
  };
};
