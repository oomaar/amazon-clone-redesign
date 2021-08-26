import { Banner, ProductFeed } from "../components";
import { HeadTag } from '../Global/HeadTag';
import { Application, Main } from "../Global/styles/styledIndexPage";
import amazonData from "../data/amazonData.json";

export default function Home({ products }) {
  return (
    <Application>
      <HeadTag title="Amazon-Clone | Modern Amazon" />

      <Main>
        <Banner />
        <ProductFeed products={products} data={amazonData.productsFeed} />
      </Main>
    </Application>
  );
};

export async function getServerSideProps() {
  const products = await fetch(`https://fakestoreapi.com/products`)
    .then(res => res.json());

  return {
    props: {
      products,
    },
  };
};
