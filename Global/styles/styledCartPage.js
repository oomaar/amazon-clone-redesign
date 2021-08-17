import styled from 'styled-components';
import { headerHeight, mdScreen, xlScreen, lgScreen } from '../GlobalStyle';

export const Container = styled.main`
  max-width: 1024px;
  margin-top: calc(${headerHeight} * 2);
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 0;

  h2 {
    font-weight: ${({ theme }) => theme.typography.fontWeight.fontBold};
    font-size: ${({ theme }) => theme.typography.h2FontSize};
    color: ${({ theme }) => theme.colors.titleColor};
  }

  @media screen and (min-width: ${mdScreen}px) {
    margin-left: 4.5rem;
  }

  @media screen and (min-width: ${xlScreen}px) {
    margin: calc(${headerHeight} * 2) auto 0 4.5rem;
  }

  @media screen and (min-width: 1160px) {
    margin: calc(${headerHeight} * 2) auto;
  }
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${lgScreen}px) {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

export const ImageContainer = styled.div`
  @media screen and (min-width: ${lgScreen}px) {
    width: 40%;
  }
`;

export const InfoContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.containerColor};
  padding: 1.5rem;
  border-radius: 0.5rem;

  p {
    color: ${({ theme }) => theme.colors.textColor};
    font-size: ${({ theme }) => theme.typography.normalFontSize};
  }

  @media screen and (min-width: ${lgScreen}px) {
    width: 50%;
  }
`;

export const Title = styled.h3`
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontBold};
  font-size: ${({ theme }) => theme.typography.h3FontSize};
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const InfoButton = styled.button`
  border: 0;
  outline: 0;
  font-size: 0.9rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontBold};
  background-color: hsl(32, 80%, 74%);
  padding: 0.45rem 0.9rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #fff;
  opacity: 0.8;
  transition: 0.5s;
  margin-right: 1rem;

  :hover {
    opacity: 1;
  }
`;

export const SubBox = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: ${lgScreen}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const CartProductContainer = styled.div`
  @media screen and (min-width: ${lgScreen}px) {
    width: 55%;
  }
`;

export const SubInfo = styled.div`
  @media screen and (min-width: ${lgScreen}px) {
    display: flex;
    justify-content: space-between;
    margin: 2rem 0;
    width: 40%;
    height: 340px;
  }
`;

export const ItemInfoContainer = styled.div`
  box-shadow: ${({ theme }) => theme.colors.shadowColor};
  padding: 1.5rem;
  border-radius: 0.5rem;
  
  p {
    color: ${({ theme }) => theme.colors.textColorLight};
  }
`;

export const SubTotal = styled.h2`
  font-size: ${({ theme }) => theme.typography.h2FontSize};
  color: ${({ theme }) => theme.colors.titleColor};
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontBold};
`;

export const ItemsNumber = styled.h3`
  font-size: ${({ theme }) => theme.typography.normalFontSize};
  color: ${({ theme }) => theme.colors.textColor};
`;

export const PrimeContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: hsl(108, 16%, 91%);
  color: hsl(111, 19%, 71%);
  font-size: ${({ theme }) => theme.typography.smallFontSize};
  padding: 0 0.5rem;
  border-radius: 5px;

  p {
    color: hsl(111, 19%, 71%);
  }
`;

export const PrimeIcon = styled.div`
  margin-right: 0.5rem;
`;