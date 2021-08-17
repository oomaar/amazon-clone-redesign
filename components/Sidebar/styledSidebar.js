import styled from 'styled-components';
import { headerHeight, sidebarWidth, mdScreen } from '../../Global/GlobalStyle';

export const Nav = styled.nav`
  background-color: ${({ theme }) => theme.colors.bodyColor};
  box-shadow: ${({ theme }) => theme.colors.shadowColor};
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
  color: ${({ theme }) => theme.colors.containerColorSecond};

  .cart__icon {
    position: relative;
  }
  
  @media screen and (min-width: ${mdScreen}px) {
    flex-direction: column;
    justify-content: space-between;
    height: 23%;
  }
`;

export const Icon = styled.div`
  transition: 0.4s;
  cursor: pointer;
  font-size: clamp(1.5rem, 1.5vw, 1.7rem);
  color: ${({ theme }) => theme.colors.containerColorSecond};

  :hover {
    transform: scale(1.1);
  }
`;

export const CartCount = styled.div`
  background-color: hsl(32, 80%, 74%);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
  width: 20px;
  height: 20px;
  font-size: 0.9rem;
  color: #fff;
  position: absolute;
  top: -10px;
  right: -10px;
`;
