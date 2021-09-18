import styled from 'styled-components';
import { lgScreen, xlScreen } from '../../Global/GlobalStyle';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 200;
  display: flex;
`;

export const Background = styled.div`
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  display: none;

  @media screen and (min-width: ${lgScreen}px) {
    display: block;
    width: 50%;
  }

  @media screen and (min-width: ${xlScreen}px) {
    width: 75%;
  }
`;

export const SettingsSidebar = styled.div`
  background: ${({ theme }) => theme.colors.bodyColor};
  width: 100%;
  color: ${({ theme }) => theme.colors.textColor};

  @media screen and (min-width: ${lgScreen}px) {
    width: 50%;
  }

  @media screen and (min-width: ${xlScreen}px) {
    width: 25%;
  }
`;

export const GreatingBox = styled.div`
  background-color: ${({ theme }) => theme.colors.containerColorSecond};
  color: ${({ theme }) => theme.colors.buttonText};
  padding: 1rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: clamp(1.5rem, 2vw, 1.7rem);

  span {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;

export const Icon = styled.div`
  font-size: clamp(1.2rem, 1.6vw, 1.5rem);
  cursor: pointer;
`;

export const SubContainer = styled.div`
  padding: 1rem 0.5rem;
  font-size: clamp(1.2rem, 1.6vw, 1.5rem);
  display: flex;
  align-items: center;
  gap: 1rem;
  cursor: pointer;

  :hover {
    text-decoration: underline;
  }
`;