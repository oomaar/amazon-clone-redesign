import styled from 'styled-components';
import { headerHeight, mdScreen, xlScreen } from '../GlobalStyle';

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

export const SubContainer = styled.div``;

export const ImageContainer = styled.div``;

export const InfoContainer = styled.div``;
