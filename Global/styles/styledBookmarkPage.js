import styled from 'styled-components';
import { headerHeight, mdScreen, xlScreen } from '../GlobalStyle';

export const Container = styled.div`
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