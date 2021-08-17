import styled from 'styled-components';
import { lgScreen, mdScreen, sidebarWidth, xlScreen } from '../../Global/GlobalStyle';

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 5rem;
  background-color: ${({ theme }) => theme.colors.containerColor};
  color: ${({ theme }) => theme.colors.textColor};

  @media screen and (min-width: ${mdScreen}px) {
    margin-left: ${sidebarWidth};
  }
`;

export const TopButton = styled.a`
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.inputColor};
  padding: 1rem 0;
  opacity: 0.8;
  display: flex;
  justify-content: center;
  box-shadow: ${({ theme }) => theme.colors.shadowColor};

  @media screen and (min-width: ${mdScreen}px) {
    margin-left: ${sidebarWidth};
  }
`;

export const FooterSubContainer = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(2, 2fr);
  place-items: center;

  @media screen and (min-width: ${lgScreen}px) {
    grid-template-columns: repeat(3, 2fr);
  }

  @media screen and (min-width: ${xlScreen}px) {
    grid-template-columns: repeat(4, 2fr);
  }
`;

export const FooterLinks = styled.div`
  height: 25rem;

  h3 {
    font-size: ${({ theme }) => theme.typography.normalFontSize};
  }
`;

export const FooterLink = styled.p`
  font-size: ${({ theme }) => theme.typography.smallFontSize};
`;

export const CopyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-top: 2px solid rgba(229, 231, 235, 0.9);

  @media screen and (min-width: ${lgScreen}px) {
    flex-direction: row;
    justify-content: space-around;
    width: 40%;
  }
`;

export const FooterCopy = styled.h6`
  span {
    color: ${({ theme }) => theme.colors.firstColor};
  }
`;
