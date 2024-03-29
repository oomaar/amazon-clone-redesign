import Image from "next/image";
import Currency from "react-currency-formatter";
import { MdRemoveShoppingCart } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart, decreaseCart, removeFromCart } from "../../Redux/slices/cartSlice";
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
    const dispatch = useDispatch();
    const id = item.id;
    const title = item.title;
    const price = item.price;
    const description = item.description;
    const category = item.category;
    const img = item.image;
    const quantity = item.cartQuantity;
    const productPrice = price * quantity;
    const discount = productPrice > 100 ? (
        Math.floor(productPrice - (30 / productPrice * 100))
    ) : (
        Math.abs(Math.floor(productPrice - (1 / productPrice * 100)))
    );

    const cartProduct = {
        id,
        title,
        price,
        description,
        category,
        img,
    };

    const handleRemoveFromCart = product => dispatch(removeFromCart(product));
    const handleAddToCart = product => dispatch(addToCart(product));
    const handleDecreaseCart = product => dispatch(decreaseCart(product));

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
                            <QuantityBtn onClick={() => handleDecreaseCart(cartProduct)}>-</QuantityBtn>
                            <p>{quantity}</p>
                            <QuantityBtn onClick={() => handleAddToCart(cartProduct)}>+</QuantityBtn>
                        </ButtonsContainer>
                        <RemoveIcon onClick={() => handleRemoveFromCart(cartProduct)}>
                            <MdRemoveShoppingCart />
                        </RemoveIcon>
                    </QuantityBox>
                </Box>
            </InfoContainer>
        </Container>
    );
};