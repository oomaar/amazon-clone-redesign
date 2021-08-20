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
    CartProductContainer,
    SubBox,
} from "../Global/styles/styledCartPage";

const Cart = () => {
    const items = useSelector(selectItems);
    const totalPrice = useSelector(selectTotal);
    const [hasPrime] = useState(Math.random() < 0.5);
    const totalDiscount = totalPrice > 100 ? (
        Math.floor(totalPrice - (30 / totalPrice * 100))
    ) : (
        Math.abs(Math.floor(totalPrice - (1 / totalPrice * 100)))
    );

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
                <SubBox>
                    <CartProductContainer >
                        {items.map((item, i) => (
                            <CartProduct key={i} item={item} items={items} />
                        ))}
                    </CartProductContainer>
                    <SubInfo>
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
                                Sub-Total: <Currency quantity={totalDiscount} currency='EGP' />
                            </SubTotal>
                            <ItemsNumber>Number of Items: {items.length}</ItemsNumber>
                            <p>This price is exclusive of taxes. GST will be added during checkout.</p>
                            <InfoButton>Proceed to Payment</InfoButton>
                        </ItemInfoContainer>
                    </SubInfo>
                </SubBox>
            )}
        </Container>
    );
};

export default Cart;
