import { useState } from "react";
import { Product } from "..";
import { FaBars } from "react-icons/fa";
import {
    Container,
    Nav,
    NavIcon,
    List,
    Item,
} from "./styledProductFeed";

export const ProductFeed = ({ products, data }) => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [showList, setShowList] = useState(false);

    const handleShowList = category => {
        setActiveCategory(category);
        setShowList(false);
    };

    const productfeedData = data.map(link => (
        <li key={link.id}>
            <Item
                onClick={() => handleShowList(link.category)}
                className={`${activeCategory === link.category && 'active__link'}`}
            >
                {link.title}
            </Item>
        </li>
    ))

    const productsComponent = products.map(({
        id,
        price,
        description,
        category,
        image
    }) => (
        <Product
            key={id}
            id={id}
            price={price}
            description={description}
            category={category}
            image={image}
        />
    ));

    const filtering = products.map(({
        id,
        price,
        description,
        category,
        image
    }) => (
        category === activeCategory && (
            <Product
                key={id}
                id={id}
                price={price}
                description={description}
                category={category}
                image={image}
            />
        )
    ));

    return (
        <div>
            <Nav>
                <NavIcon onClick={() => setShowList(state => !state)}>
                    <FaBars />
                </NavIcon>
                <List showList={showList}>
                    {productfeedData}
                </List>
            </Nav>
            <Container>
                {activeCategory === "all" ? (
                    <>
                        {productsComponent.slice(13, 14)}
                        {productsComponent.slice(8, 14)}
                        {productsComponent.slice(0, 8)}
                        {productsComponent.slice(14, productsComponent.length)}
                    </>
                ) : filtering}
            </Container>
        </div>
    );
};