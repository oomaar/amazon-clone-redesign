import styled from 'styled-components';
import { mdScreen, lgScreen, xlScreen, sidebarWidth } from "../GlobalStyle";

export const Container = styled.div`
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(1, minmax(0, 1fr));
  padding: 5rem 1rem 5rem;
  position: relative;
  
  @media screen and (min-width: ${mdScreen}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    margin-left: ${sidebarWidth};
  }

  @media screen and (min-width: ${lgScreen}px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media screen and (min-width: ${xlScreen}px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }
`;