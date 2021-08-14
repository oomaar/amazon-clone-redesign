import styled from 'styled-components';
import { lgScreen, mdScreen, xlScreen } from '../../Global/GlobalStyle';

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  padding: 1rem 1rem 5rem;
  
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