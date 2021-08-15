import styled from 'styled-components';
import { headerHeight, lgScreen, mdScreen, sidebarWidth } from '../../Global/GlobalStyle';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.bodyColor};
  display: flex;
  align-items: center;
  flex-direction: column-reverse;
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  height: calc(${headerHeight} * 2);
  box-shadow: none;
  z-index: 100;
  padding: 0.5rem 0;
  
  @media (min-width: ${mdScreen}px) {
    flex-direction: row;
    padding: 0.2rem 1rem;
    justify-content: center;
    left: ${sidebarWidth};
    box-shadow: 1px 1px 2px rgba(229, 231, 235, 0.9);
  }
`;

export const Subcontainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 0 2rem;

  @media (min-width: ${mdScreen}px) {
    width: unset;
    padding: 0;
    display: block;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.inputColor};
  border: 1px solid rgba(229, 231, 235, 0.5);
  transition: 0.5s;

  :hover {
    box-shadow: ${({ darkMode }) => darkMode === "light" ? '0 10px 15px -3px hsla(0, 0%, 0%, 0.01), 0 4px 6px -2px hsla(0, 0%, 0%, 0.05)' : '0 10px 15px -3px hsla(220, 13%, 91%, 0.1), 0 4px 6px -2px hsla(220, 13%, 91%, 0.05)'};
  }

  :focus-within {
    box-shadow: ${({ darkMode }) => darkMode === "light" ? '0 10px 15px -3px hsla(0, 0%, 0%, 0.01), 0 4px 6px -2px hsla(0, 0%, 0%, 0.05)' : '0 10px 15px -3px hsla(220, 13%, 91%, 0.1), 0 4px 6px -2px hsla(220, 13%, 91%, 0.05)'};
  }

  @media (min-width: ${mdScreen}px) {
    margin: 0;
    margin-left: auto;
  }

  @media (min-width: ${lgScreen}px) {
    width: 50%;
  }
`;

export const Icon = styled.div`
  font-size: 1.4rem;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.firstColorAlt};
  display: flex;
  justify-content: center;
`;

export const InputContainer = styled.div`
  border-radius: 1rem;
  margin-left: 0.2rem;
  width: 100%;
  padding: 0 0.5rem;
`;

export const Input = styled.input`
  border: 0;
  outline: 0;
  background: transparent;
  color: ${({ theme }) => theme.colors.textColor};
  width: 100%;
  height: 100%;

  @media screen and (min-width: ${mdScreen}px) {
    font-size: 1.1rem;
  }
`;

export const Logo = styled.div`
  width: 150px;
  cursor: pointer;

  @media (min-width: ${mdScreen}px) {
    width: 200px;
  }
`;