import styled from 'styled-components';
import { mdScreen, xlScreen } from "../GlobalStyle";

export const Main = styled.main`
  max-width: 1024px;

  @media screen and (min-width: ${mdScreen}px) {
    margin: 0 0 0 4.5rem;
  }

  @media screen and (min-width: ${xlScreen}px) {
    margin: 0 auto 0 4.5rem;
  }

  @media screen and (min-width: 1160px) {
    margin: 0 auto;
  }
`;