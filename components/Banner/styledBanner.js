import styled from 'styled-components';
import { headerHeight, lgScreen, mdScreen } from '../../Global/GlobalStyle';

export const Container = styled.div`
  margin-top: calc(${headerHeight} * 2);
  padding-top: 1rem;
  position: relative;

  .carousel {
    display: none;

    @media (min-width: ${lgScreen}px) {
        display: block;
    }
  }

  .carousel li img {
    height: 400px;
    object-fit: contain;
  }

.carousel .control-next.control-arrow, .carousel .control-next.control-arrow:hover{
  background-color: transparent;
  right: 20px;
}

.carousel .control-prev.control-arrow, .carousel .control-prev.control-arrow:hover {
  background-color: transparent;
  left: 20px;
}

.carousel .control-arrow, .carousel.carousel-slider .control-arrow{
  opacity: 0.8;
}

.carousel .control-prev.control-arrow:hover,
.carousel .control-next.control-arrow:hover {
    opacity: 1;
}

.carousel .control-next.control-arrow:before {
  content: '';
  border: solid #000;
  border-width: 0 8px 8px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(-45deg);
  -webkit-transform: rotate(-45deg);
}

.carousel .control-prev.control-arrow:before {
  content: '';
  border: solid #000;
  border-width: 0 8px 8px 0;
  display: inline-block;
  padding: 10px;
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}
`;
