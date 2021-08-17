import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";
import { selectItems } from "../Redux/slices/cartSlice";
import {
    Container,
    SubContainer,
    ImageContainer,
    InfoContainer,
    Title,
    InfoButton,
} from "../Global/styles/styledCartPage";

const Cart = () => {
    const items = useSelector(selectItems);

    return (
        <Container>
            <h2>Your Cart</h2>

            {items.length === 0 ? (
                <SubContainer>
                    <ImageContainer>
                        <Image
                            src="/empty-cart.png"
                            width={400}
                            height={400}
                            objectFit="contain"
                        />
                    </ImageContainer>
                    <InfoContainer>
                        <Title>Your cart is empty !</Title>
                        <p>Your cart lives to serve. Give it purpose - fill it with clothes, Electronics, Jewelery, etc. and it will be happy to serve you.</p>
                        <Link href="/">
                            <InfoButton>
                                Continue Shopping
                            </InfoButton>
                        </Link>
                    </InfoContainer>
                </SubContainer>
            ) : (
                <h1>Display Cart Here</h1>
            )}
        </Container>
    );
};

export default Cart;
