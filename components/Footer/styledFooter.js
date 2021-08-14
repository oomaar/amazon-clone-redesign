import styled from 'styled-components';
import { mdScreen, sidebarWidth } from '../../Global/GlobalStyle';

export const FooterContainer = styled.footer`
  padding: 1rem 0 2rem;
  background-color: ${({ theme }) => theme.colors.bodyColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 1px 2px 4px rgba(0, 0, 0, 0.4);

  @media screen and (min-width: ${mdScreen}px) {
    padding: 1rem;
    flex-direction: row;
    justify-content: space-between;
    margin-left: ${sidebarWidth};
    height: 4rem;
  }
`;