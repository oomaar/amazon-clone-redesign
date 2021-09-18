import styled from 'styled-components';
import { headerHeight, lgScreen, mdScreen, xlScreen } from '../GlobalStyle';

export const Container = styled.div`
  max-width: 1024px;
  margin-top: calc(${headerHeight} * 2);
  display: flex;
  flex-direction: column;
  padding: 2rem 1rem 0;

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

export const Title = styled.h2`
  font-size: clamp(1.5rem, 2vw, 1.875rem);
  font-weight: ${({ theme }) => theme.typography.fontWeight.fontBold};
  color: ${({ theme }) => theme.colors.titleColor};
`;

export const SubTitle = styled.h2`
  font-size: clamp(1.4rem, 2vw, 1.8rem);
  align-self: center;
`;

export const ImageContainer = styled.div`
  align-self: center;
  width: 500px;

  @media screen and (max-width: ${mdScreen}px) {
    width: 90%;
  }
`;