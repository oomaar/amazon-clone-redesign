import styled from 'styled-components';
import { mdScreen, sidebarWidth, headerHeight } from "../GlobalStyle";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 1rem 5rem;
  position: relative;
  margin-top: calc(${headerHeight} * 2);
  color: ${({ theme }) => theme.colors.textColor};
  text-align: center;
  
  @media screen and (min-width: ${mdScreen}px) {
    margin-left: ${sidebarWidth};
    margin-top: ${headerHeight};
  }
`;

export const Sorry = styled.p`
  font-size: 4.5rem;
  margin: 0;

  @media screen and (min-width: ${mdScreen}px) {
    font-size: 5rem;
  }
`;

export const Title = styled.p`
  font-size: 2rem;
  margin: 0;

  @media screen and (min-width: ${mdScreen}px) {
    font-size: 2.5rem;
  }
`;

export const SubTitle = styled.p`
  font-size: 2rem;

  @media screen and (min-width: ${mdScreen}px) {
    font-size: 2.5rem;
  }
`;

export const BackButton = styled.a`
  margin-left: 0.4rem;
  color: hsl(32, 80%, 74%);

  :hover {
    text-decoration: underline;
  }
`;