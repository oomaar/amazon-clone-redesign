import { Product } from "..";
import {
    Container,
} from "./styledProductFeed";

export const ProductFeed = ({ products }) => {
    const productsComponent = products.map(({
        id,
        title,
        price,
        description,
        category,
        image
    }) => (
        <Product
            key={id}
            id={id}
            title={title}
            price={price}
            description={description}
            category={category}
            image={image}
        />
    ));

    return (
        <Container>
            {productsComponent}
        </Container>
    );
};
