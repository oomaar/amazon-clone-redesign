import Image from "next/image";
import { useState } from "react";
import Currency from "react-currency-formatter";
import { HeadTag } from "../../Global/HeadTag";
import { FaLocationArrow } from "react-icons/fa";
import { MdAddShoppingCart } from "react-icons/md";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { Product } from "../../components";
import { useDispatch } from "react-redux";
import { addToCart } from "../../Redux/slices/cartSlice";
import {
    Container,
    ProductContainer,
    ImageContainer,
    InfoContainer,
    Title,
    Description,
    PriceContainer,
    Price,
    Discount,
    PrimeContainer,
    PrimeSubContainer,
    PrimeIcon,
    ButtonContainer,
    AddButton,
    BookMark,
    BookIcon,
    LikeProduct,
} from '../../Global/styles/styledProductPage';

const SingleProduct = ({ product, products }) => {
    const [bookmark, setBookmark] = useState(false);

    const id = product.id;
    const title = product.title;
    const price = product.price;
    const description = product.description;
    const category = product.category;
    const img = product.image;
    const dispatch = useDispatch();
    const [hasPrime] = useState(Math.random() < 0.5);
    const discount = price > 100 ? (
        Math.floor(price - (30 / price * 100))
    ) : (
        Math.abs(Math.floor(price - (1 / price * 100)))
    );

    const cartProduct = {
        id,
        title,
        price,
        description,
        category,
        img,
    };

    const addItemToCart = item => dispatch(addToCart(item));

    const productComponent = products.map(product => (
        product.category === category && product.id !== id && (
            <Product
                key={product.id}
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
            />
        )
    ));

    return (
        <div>
            <HeadTag title={`Product | ${product.category}`} />

            <Container>
                <ProductContainer>
                    <ImageContainer>
                        <Image
                            src={product.image}
                            width={300}
                            height={500}
                            objectFit="contain"
                        />
                    </ImageContainer>

                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Description>{product.description}.</Description>
                        <PriceContainer>
                            <Discount>
                                <Currency quantity={discount} currency='EGP' />
                            </Discount>
                            <Price>
                                <Currency quantity={price} currency='EGP' />
                            </Price>
                        </PriceContainer>
                        {hasPrime && (
                            <PrimeContainer>
                                <img src="/prime-tag.png" alt="" />
                                <PrimeSubContainer>
                                    <PrimeIcon>
                                        <FaLocationArrow />
                                    </PrimeIcon>
                                    <p>
                                        Free Delivery Available - Cairo, Egypt 11361
                                    </p>
                                </PrimeSubContainer>
                            </PrimeContainer>
                        )}
                        <ButtonContainer>
                            <AddButton onClick={() => addItemToCart(cartProduct)}>
                                <MdAddShoppingCart />
                                <span>Add to Cart</span>
                            </AddButton>
                            <BookMark>
                                <BookIcon onClick={() => setBookmark(state => !state)}>
                                    {bookmark ? (
                                        <BsBookmarkFill />
                                    ) : (
                                        <BsBookmark />
                                    )}
                                </BookIcon>
                            </BookMark>
                        </ButtonContainer>
                    </InfoContainer>
                </ProductContainer>

                <div>
                    <h3>You Might also Like</h3>
                    <LikeProduct>
                        {productComponent}
                    </LikeProduct>
                </div>
            </Container>
        </div>
    );
};

export default SingleProduct;

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
    const likes = await fetch(`https://fakestoreapi.com/products`);
    const products = await likes.json();

    return {
        props: { product: data, products }
    };
};