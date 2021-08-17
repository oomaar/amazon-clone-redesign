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
    const [hasPrime] = useState(Math.random() < 0.5);
    const productPrice = product.price;
    const discount = productPrice > 100 ? (
        Math.floor(productPrice - (30 / productPrice * 100))
    ) : (
        Math.abs(Math.floor(productPrice - (1 / productPrice * 100)))
    );
    const randomProductMin = Math.floor(Math.random() * 10) + 1;
    const randomProductMax = Math.floor(Math.random() * 10) + 10;
    const productComponent = products.map(product => (
        <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
        />
    ));

    const dispatch = useDispatch();
    const id = product.id;
    const title = product.title;
    const price = product.price;
    const description = product.description;
    const category = product.category;
    const image = product.image;
    const addItemToCart = () => {
        const cartProduct = {
            id,
            title,
            price,
            description,
            category,
            image,
        };
        dispatch(addToCart(cartProduct));
    };

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
                                <Currency quantity={productPrice} currency='EGP' />
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
                            <AddButton onClick={addItemToCart}>
                                <MdAddShoppingCart />
                                <span>Add to Cart</span>
                            </AddButton>
                            <BookMark>
                                <BookIcon>
                                    <BsBookmark />
                                    {/* <BsBookmarkFill /> */}
                                </BookIcon>
                            </BookMark>
                        </ButtonContainer>
                    </InfoContainer>
                </ProductContainer>

                <div>
                    <h3>You Might also Like</h3>
                    <LikeProduct>
                        {productComponent.slice(randomProductMin, randomProductMax)}
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
