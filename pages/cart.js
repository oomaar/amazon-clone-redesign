import Image from "next/image";
import Link from "next/link";
import Currency from "react-currency-formatter";
import { useSelector } from "react-redux";
import { selectItems, selectTotal } from "../Redux/slices/cartSlice";
import { BsCheckAll } from "react-icons/bs";
import { CartProduct } from "../components";
import { useState } from "react";
import {
    Container,
    SubContainer,
    ImageContainer,
    InfoContainer,
    Title,
    InfoButton,
    SubInfo,
    ItemInfoContainer,
    SubTotal,
    ItemsNumber,
    PrimeContainer,
    PrimeIcon,
} from "../Global/styles/styledCartPage";

const Cart = () => {
    const items = useSelector(selectItems);
    const totalPrice = useSelector(selectTotal);
    const [hasPrime] = useState(Math.random() < 0.5);

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
                <SubInfo>
                    {items.map((item, i) => (
                        <CartProduct item={item} items={items} key={i} />
                    ))}
                    <ItemInfoContainer>
                        <Title>Checkout</Title>
                        {hasPrime && (
                            <PrimeContainer>
                                <PrimeIcon>
                                    <BsCheckAll />
                                </PrimeIcon>
                                <p>
                                    Your order is eligable for Free Delivery
                                </p>
                            </PrimeContainer>
                        )}
                        <SubTotal>
                            Sub-Total: <Currency quantity={totalPrice} currency='EGP' />
                        </SubTotal>
                        <ItemsNumber>Number of Items: {items.length}</ItemsNumber>
                        <p>This price is exclusive of taxes. GST will be added during checkout.</p>
                        <InfoButton>Proceed to Payment</InfoButton>
                    </ItemInfoContainer>
                </SubInfo>
            )}
        </Container>
    );
};

export default Cart;
