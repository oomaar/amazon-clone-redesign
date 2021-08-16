import { HeadTag } from "../../Global/HeadTag";

const Product = ({ product }) => {
    return (
        <div>
            <HeadTag title={`Product | ${product.category}`} />
            Product Page
        </div>
    );
};

export default Product;

export const getStaticPaths = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const data = await res.json();

    const paths = data.map(product => {
        return {
            params: { id: product.id.toString() }
        };
    });

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async (context) => {
    const id = context.params.id;
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    const data = await res.json();

    return {
        props: { product: data }
    };
};

// export async function getStaticPaths() {
//     const res = await fetch("https://fakestoreapi.com/products");
//     const data = await res.json();

//     const paths = data.map(product => {
//         return {
//             params: { id: product.id.toString() }
//         };
//     });

//     return {
//         paths,
//         // This Mistake made me stuck for 1 day !
//         fallBack: false
//     };
// };
