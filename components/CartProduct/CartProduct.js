import Image from "next/image";
import Currency from "react-currency-formatter";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart, selectItems } from "../../Redux/slices/cartSlice";
import {
    Container,
    InfoContainer,
    Name,
    Box,
    ImageContainer,
    PriceContainer,
    Discount,
    Price,
    QuantityBox,
    ButtonsContainer,
    QuantityBtn,
    RemoveIcon,
} from "./styledCartProduct";

export const CartProduct = ({ item }) => {
    const items = useSelector(selectItems);
    const id = item.id;
    const dispatch = useDispatch();
    const productPrice = item.price;
    const discount = productPrice > 100 ? (
        Math.floor(productPrice - (30 / productPrice * 100))
    ) : (
        Math.abs(Math.floor(productPrice - (1 / productPrice * 100)))
    );

    const removeItemFromCart = () => {
        dispatch(removeFromCart(id));
    };

    return (
        <Container>
            <ImageContainer>
                <Image
                    src={item.img}
                    width={200}
                    height={150}
                    objectFit="contain"
                />
            </ImageContainer>
            <InfoContainer>
                <Name>{item.title}</Name>
                <Box>
                    <PriceContainer>
                        <Discount>
                            <Currency quantity={discount} currency='EGP' />
                        </Discount>
                        <Price>
                            <Currency quantity={productPrice} currency='EGP' />
                        </Price>
                    </PriceContainer>
                    <QuantityBox>
                        <ButtonsContainer>
                            <QuantityBtn>-</QuantityBtn>
                            <p>{items.length}</p>
                            <QuantityBtn>+</QuantityBtn>
                        </ButtonsContainer>
                        <RemoveIcon onClick={removeItemFromCart}>
                            <MdRemoveShoppingCart />
                        </RemoveIcon>
                    </QuantityBox>
                </Box>
            </InfoContainer>
        </Container>
    );
};