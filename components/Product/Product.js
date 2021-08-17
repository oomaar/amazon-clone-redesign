import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AiFillStar } from "react-icons/ai";
import Currency from "react-currency-formatter";
import {
    Container,
    ImageContainer,
    ViewContainer,
    ViewLink,
    ContentBox,
    ProductCategory,
    Text,
    SubContainer,
    PriceContainer,
    Discount,
    Price,
    Stars,
    PrimeContainer,
} from "./styledProduct";

export const Product = ({
    id,
    // title,
    price,
    description,
    category,
    image
}) => {
    const MAX_RATING = 5;
    const MIN_RATING = 1;
    const [rating] = useState(Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1)) + MIN_RATING);
    const [hasPrime] = useState(Math.random() < 0.5);
    const truncate = (string, n) => string?.length > n ? string.substr(0, n - 1) + '...' : string;
    const discount = price > 100 ? (
        Math.floor(price - (30 / price * 100))
    ) : (
        Math.abs(Math.floor(price - (1 / price * 100)))
    );

    return (
        <Container>
            <ImageContainer>
                <Image
                    src={image}
                    width={300}
                    height={300}
                    objectFit="contain"
                />
                <ViewContainer>
                    <Link href={`/products/${id}`}>
                        <ViewLink>
                            View Product
                        </ViewLink>
                    </Link>
                </ViewContainer>
            </ImageContainer>
            <ContentBox>
                <ProductCategory>{category}</ProductCategory>
                <Text>{truncate(description, 50)}</Text>
                <SubContainer>
                    <PriceContainer>
                        <Discount>
                            <Currency quantity={discount} currency='EGP' />
                        </Discount>
                        <Price>
                            <Currency quantity={price} currency='EGP' />
                        </Price>
                    </PriceContainer>
                    <Stars>
                        {rating} <AiFillStar className="yellowColor" />
                    </Stars>
                </SubContainer>
                {hasPrime && (
                    <PrimeContainer>
                        <img src="/prime-tag.png" alt="" />
                    </PrimeContainer>
                )}
            </ContentBox>
        </Container>
    );
};
