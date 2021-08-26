import { Banner, ProductFeed } from "../components";
import { HeadTag } from '../Global/HeadTag';
import { Main } from "../Global/styles/styledIndexPage";
import amazonData from "../data/amazonData.json";

export default function Home({ products }) {
  return (
    <div>
      <HeadTag title="Amazon-Clone | Modern Amazon" />

      <Main>
        <Banner />
        <ProductFeed products={products} data={amazonData.productsFeed} />
      </Main>
    </div>
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