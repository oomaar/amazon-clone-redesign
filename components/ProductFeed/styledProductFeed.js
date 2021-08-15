import styled from 'styled-components';
import { headerHeight, lgScreen, mdScreen, sidebarWidth, xlScreen } from '../../Global/GlobalStyle';

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  padding: 5rem 1rem 5rem;
  position: relative;
  
  @media screen and (min-width: ${mdScreen}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  @media screen and (min-width: ${lgScreen}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (min-width: ${xlScreen}px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;

export const Nav = styled.nav`
  padding: 1rem 0.5rem 0.5rem;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.bodyColor};
  z-index: 100;
  top: 6rem;
  right: 0;
  left: 0;
  
  @media screen and (min-width: ${mdScreen}px) {
    position: sticky;
    top: 6.03rem;
    left: calc(${sidebarWidth} + 1rem);
  }
`;

export const List = styled.ul`
  display: ${({ showList }) => showList ? "flex" : "none"};
  flex-direction: column;
  border-bottom: 1px solid ${({ theme }) => theme.colors.titleColor};
  align-items: center;
  margin: 0;
    
  .active__link {
    border-bottom: 3px solid ${({ theme }) => theme.colors.titleColor};
    opacity: 1;
  }

  @media screen and (min-width: ${mdScreen}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 0;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
  width: 10%;
  margin-left: auto;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.firstColor};

  @media screen and (min-width: ${mdScreen}px) {
    display: none;
  }
`;

export const Item = styled.p`
  font-size: ${({ theme }) => theme.typography.normalFontSize};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontSemiBold};
  color: ${({ theme }) => theme.colors.titleColor};
  transition: 0.5s;
  cursor: pointer;
  padding: 0 0.5rem 0.5rem;
  border-bottom: 3px solid transparent;
  margin: 0.5rem;
  opacity: 0.4;

  :hover {
    border-bottom: 3px solid ${({ theme }) => theme.colors.titleColor};
    opacity: 1;
  }

  @media screen and (min-width: ${mdScreen}px) {
    margin: 0;
    font-size: ${({ theme }) => theme.typography.smallFontSize};
  }

  @media screen and (min-width: ${lgScreen}px) {
    font-size: ${({ theme }) => theme.typography.h3FontSize};
  }
`;