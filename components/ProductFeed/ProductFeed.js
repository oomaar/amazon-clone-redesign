import { useState } from "react";
import { Product } from "..";
import { FaBars } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
import {
    Container,
    Nav,
    NavIcons,
    NavIcon,
    List,
    Item,
} from "./styledProductFeed";

export const ProductFeed = ({ products }) => {
    const [activeCategory, setActiveCategory] = useState("all");
    const [showList, setShowList] = useState(false);

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

    const filtering = products.map(({ id,
        title,
        price,
        description,
        category,
        image }) => (
        category === activeCategory && <Product
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
        <div>
            <Nav>
                <NavIcons>
                    <NavIcon onClick={() => setShowList(state => !state)}>
                        <FaBars />
                    </NavIcon>
                    <NavIcon>
                        <HiOutlineUserCircle />
                    </NavIcon>
                </NavIcons>
                <List showList={showList}>
                    <li>
                        <Item
                            onClick={() => setActiveCategory("all")}
                            className={`${activeCategory === "all" && 'active__link'}`}
                        >
                            All
                        </Item>
                    </li>
                    <li>
                        <Item
                            onClick={() => setActiveCategory("electronics")}
                            className={`${activeCategory === "electronics" && 'active__link'}`}
                        >
                            Electronics
                        </Item>
                    </li>
                    <li>
                        <Item
                            onClick={() => setActiveCategory("men's clothing")}
                            className={`${activeCategory === "men's clothing" && 'active__link'}`}
                        >
                            Men's Clothing
                        </Item>
                    </li>
                    <li>
                        <Item
                            onClick={() => setActiveCategory("women's clothing")}
                            className={`${activeCategory === "women's clothing" && 'active__link'}`}
                        >
                            Women's Clothing
                        </Item>
                    </li>
                    <li>
                        <Item
                            onClick={() => setActiveCategory("jewelery")}
                            className={`${activeCategory === "jewelery" && 'active__link'}`}
                        >
                            Jewelery
                        </Item>
                    </li>
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
