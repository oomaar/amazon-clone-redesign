import styled from 'styled-components';
import { Banner, ProductFeed } from "../components";
import { mdScreen, xlScreen } from "../Global/GlobalStyle";
import { HeadTag } from '../Global/HeadTag';

export default function Home({ products }) {
  return (
    <Application>
      <HeadTag title="Amazon-Clone | Modern Amazon" />

      <Main>
        <Banner />
        <ProductFeed products={products} />
      </Main>
    </Application>
  );
};

const Application = styled.div``;

const Main = styled.main`
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

export async function getServerSideProps() {
  const products = await fetch(`https://fakestoreapi.com/products`)
    .then(res => res.json());

  return {
    props: {
      products,
    },
  };
};
