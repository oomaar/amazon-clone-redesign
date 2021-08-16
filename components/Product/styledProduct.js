import styled, { keyframes } from 'styled-components';

const animate = keyframes`
  from {
    transform: scale(1);
  }
  
  to {
    transform: scale(0);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0 10px 15px -3px hsla(0, 0%, 0%, 0.1), 0 4px 6px -2px hsla(0, 0%, 0%, 0.5);
  max-width: 300px;
  max-height: 800px;
  height: 100%;
  width: 100%;
  border-radius: 0.5rem;
  background-color: ${({ theme }) => theme.colors.inputColor};
  margin: auto;
  position: relative;
  color: ${({ theme }) => theme.colors.textColor};
  animation: ${animate} 0.1s linear none;
`;

export const ViewContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(129, 129, 129, 0.3);
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  display: flex;
  transition: 0.5s;
  opacity: 0;
`;

export const ViewLink = styled.a`
  font-size: 0.75rem;
  text-align: center;
  background-color: #fff;
  padding: 0.45rem 0.9rem;
  border-radius: 0.5rem;
  cursor: pointer;
  color: #000;
`;

export const ImageContainer = styled.div`
  cursor: pointer;
  position: relative;
  background-color: #fff;
  border-radius: 0.5rem;

  :hover ${ViewContainer} {
    opacity: 1;
  }
`;

export const ContentBox = styled.div`
  padding: 1rem;
`;

export const ProductCategory = styled.p`
  color: ${({ theme }) => theme.colors.textColor};
  background-color: ${({ theme }) => theme.colors.containerColor};
  width: 60%;
  text-align: center;
  padding: 0.3rem 0.5rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-size: 0.7rem;
`;

export const Text = styled.p`
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontSemiBold};
  height: 2rem;
`;

export const SubContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const PriceContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const Discount = styled.p`
  font-size: 1.1rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontBold};
`;

export const Price = styled.p`
  font-size: 0.8rem;
  color: #f00;
  text-decoration: line-through;
  margin-left: 0.5rem;
  font-weight: ${({ theme }) => theme.typography.fontWeight.SemiBold};
`;

export const Stars = styled.div`
  display: flex;
  align-items: center;

  .yellowColor {
    color: hsl(39, 69%, 50%);
  }
`;

export const PrimeContainer = styled.div`
  img {
    width: 100px;
  }
`;
