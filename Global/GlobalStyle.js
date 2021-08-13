import { createGlobalStyle } from "styled-components";

const hueColor = '39';

// View Ports
export const smScreen = 280;
export const mdScreen = 568;
export const lgScreen = 768;
export const xlScreen = 1024;

export const theme = {
    HeaderHeight: '3rem',
    typography: {
        bodyFont: `'Roboto', sans-serif;`,
        bigFontSize: '2rem',
        h1FontSize: '1.5rem',
        h2FontSize: '1.25rem',
        h3FontSize: '1.12rem',
        normalFontSize: '0.938rem',
        smallFontSize: '0.813rem',
        smallerFontSize: '0.75rem',
        fontWeight: {
            fontMedium: '400',
            fontSemiBold: '500',
            fontBold: '700'
        }
    }
};

export const lightTheme = {
    colors: {
        firstColor: `hsl(${hueColor}, 69%, 61%)`,
        firstColorSecond: `hsl(${hueColor}, 69%, 61%)`,
        firstColorAlt: `hsl(${hueColor}, 57%, 53%)`,
        firstColorLighter: `hsl(${hueColor}, 92%, 85%)`,
        titleColor: `hsl(${hueColor}, 8%, 15%)`,
        textColor: `hsl(${hueColor}, 8%, 45%)`,
        textColorLight: `hsl(${hueColor}, 8%, 65%)`,
        inputColor: `hsl(${hueColor}, 70%, 96%)`,
        bodyColor: `hsl(${hueColor}, 60%, 99%)`,
        containerColor: '#eee',
        scrollBarColor: `hsl(${hueColor}, 12%, 90%)`,
        scrollThumbColor: `hsl(${hueColor}, 12%, 80%)`,
    },
};

export const darkTheme = {
    colors: {
        firstColor: `hsl(${hueColor}, 69%, 61%)`,
        firstColorSecond: `hsl(${hueColor}, 30%, 8%)`,
        firstColorAlt: `hsl(${hueColor}, 57%, 53%)`,
        firstColorLighter: `hsl(${hueColor}, 92%, 85%)`,
        titleColor: `hsl(${hueColor}, 8%, 95%)`,
        textColor: `hsl(${hueColor}, 8%, 75%)`,
        textColorLight: `hsl(${hueColor}, 8%, 65%)`,
        inputColor: `hsl(${hueColor}, 29%, 16%)`,
        bodyColor: `hsl(${hueColor}, 28%, 13%)`,
        containerColor: `hsl(${hueColor}, 29%, 16%)`,
        scrollBarColor: `hsl(${hueColor}, 12%, 48%)`,
        scrollThumbColor: `hsl(${hueColor}, 12%, 36%)`,
    },
};

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.typography.bodyFont};
    background-color: ${({ theme }) => theme.colors.bodyColor};
  }

  ul {
    list-style: none;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  h1,h2,h3,h4,h5,h6 {
    color: ${({ theme }) => theme.colors.titleColor};
    font-weight: ${({ theme }) => theme.typography.fontWeight.fontSemiBold};
  }

  img {
    max-width: 100%;
  }
`;