import styled from 'styled-components';
import { lgScreen, mdScreen } from '../../Global/GlobalStyle';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 2rem 0;
  align-items: center;
  box-shadow: ${({ theme }) => theme.colors.shadowColor};
  padding: 1.5rem 0.5rem;
  border-radius: 0.5rem;

  @media screen and (min-width: ${lgScreen}px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const InfoContainer = styled.div`
    @media screen and (min-width: ${lgScreen}px) {
        width: 70%;
    }
`;

export const ImageContainer = styled.div`
  width: 150px;

  @media screen and (min-width: ${lgScreen}px) {
    width: 20%;
  }
`;

export const Name = styled.h3`
  font-size: ${({ theme }) => theme.typography.h3FontSize};
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const Box = styled.div`
  display: flex;
  justify-content: space-between;
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
  color: #7D1935;
  color: #f00;
  text-decoration: line-through;
  margin-left: 0.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.SemiBold};
`;

export const QuantityBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    color: ${({ theme }) => theme.colors.titleColor};
    margin: 0 0.5rem;
    font-size: 1rem;

    @media screen and (min-width: ${mdScreen}px) {
      font-size: 1.1rem;
    }
  }
`;

export const QuantityBtn = styled.button`
  outline: 0;
  border: 0;
  background-color: ${({ theme }) => theme.colors.inputColor};
  color: ${({ theme }) => theme.colors.textColor};
  padding: 0.3rem;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;

  @media screen and (min-width: ${mdScreen}px) {
    padding: 0.4rem;
  }
`;

export const RemoveIcon = styled.div`
  color: #fff;
  background-color: #f00;
  padding: 0.2rem;
  font-size: 1.2rem;
  margin-left: 0.5rem;
  border-radius: 5px;
  cursor: pointer;

  @media screen and (min-width: ${mdScreen}px) {
    padding: 0.4rem;
  }
`;