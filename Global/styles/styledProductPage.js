import styled from 'styled-components';
import { headerHeight, lgScreen, mdScreen, xlScreen } from "../GlobalStyle";

export const Container = styled.main`
  max-width: 1024px;
  margin-top: calc(${headerHeight} * 2);
  display: flex;
  flex-direction: column;
  padding-top: 2rem;

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

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3rem;

  @media screen and (min-width: ${lgScreen}px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 0 1rem;
  }
`;

export const ImageContainer = styled.div`
  width: 90%;
  box-shadow: ${({ theme }) => theme.colors.shadowColor};
  border-radius: 1rem;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.inputColor};

  @media screen and (min-width: ${lgScreen}px) {
    width: 40%;
  }
`;

export const InfoContainer = styled.div`
  width: 90%;

  @media screen and (min-width: ${lgScreen}px) {
    width: 50%;
  }
`;

export const Title = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3FontSize};
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.typography.normalFontSize};
  color: ${({ theme }) => theme.colors.textColor};
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Discount = styled.p`
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontBold};
  color: ${({ theme }) => theme.colors.textColor};
`;

export const Price = styled.p`
  font-size: 0.8rem;
  color: #f00;
  text-decoration: line-through;
  margin-left: 0.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.SemiBold};
`;

export const PrimeContainer = styled.div`
  display: flex;
  flex-direction: column;

  img {
    width: 70px;
  }
`;

export const PrimeSubContainer = styled.div`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.colors.textColorLight};

  p {
    margin-left: 0.5rem;
  }
`;

export const PrimeIcon = styled.div`
  font-size: 0.7rem;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const AddButton = styled.button`
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

export const BookMark = styled.div`
  background: ${({ theme }) => theme.colors.containerColorSecond};
  padding: 0.3rem;
  border-radius: 5px;
  cursor: pointer;
`;

export const BookIcon = styled.div`
  color: #fff;
`;

export const LikeProduct = styled.div`
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
