import styled from 'styled-components';
import { headerHeight, sidebarWidth, mdScreen, smScreen } from '../../Global/GlobalStyle';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.containerColor};
  box-shadow: 1px 2px 7px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 1rem 1rem 0.5rem;
  position: fixed;
  bottom: 0;
  width: 100%;
  height: ${headerHeight};
  z-index: 100;

  .user__icon {
    display: none;
  }
  
  @media screen and (min-width: ${mdScreen}px) {
    top: 0;
    left: 0;
    width: ${sidebarWidth};
    height: 100vh;
    flex-direction: column;
    padding: 2rem;

    .user__icon {
      display: block;
    }
  }
`;

export const Logo = styled.div`
  width: 0px;
  cursor: pointer;

  @media screen and (min-width: ${mdScreen}px) {
    width: 50px;
  }
`;

export const Icons = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0;
  width: 100%;
  
  @media screen and (min-width: ${mdScreen}px) {
    flex-direction: column;
    justify-content: space-between;
    height: 25%;
  }
`;

export const Icon = styled.div`
  color: ${({ theme }) => theme.colors.textColor};
  transition: 0.4s;
  cursor: pointer;
  font-size: clamp(1.5rem, 1.5vw, 1.7rem);

  :hover {
    transform: scale(1.1);
  }
`;
