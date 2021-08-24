import { useDispatch } from "react-redux";
import styled from "styled-components";
import { BasketItem as item, decreaseQuantity, increaseQuantity, removeItem } from "./basketSlice";
import { Icon } from '@iconify/react';

const BasketItemWrapper = styled.div`
`

const BasketItemContainer = styled.div`
width: 100%;
max-width: 24rem;
height: 7.5rem;
display: grid;
padding: 2.5%;
grid-template-columns: 35% 50% 15%;
grid-template-rows: repeat(3, 1fr);
color: #3e3e3e;
`

const ItemImage = styled.img`
grid-column: 1 / 2;
grid-row: 1 / 4;
width: 100%;
height: 100%;
object-fit: cover;
`

const ItemTitle = styled.h3`
height: 100%;
padding: 3%;
font-size: 1.25rem;
grid-area: 1 / 2 / 2 / 3;
`

const ItemSize = styled.h4`
padding: 3%;
font-size: 0.8rem;
`

const ItemPrice = styled.h4`
grid-area: 3 / 3 / 4 / 4;
margin: auto 0;
`

const QuantitySection = styled.div`
padding-left: 3%;
display: flex;
justify-content: flex-start;
grid-area: 3 / 2 / 4 / 3;
`

const AdjustQuantity = styled.button`
background-color: transparent;
border: none;
width: 1.55rem;
height: 1.55rem;
border-radius: 100%;
font-size: 1.25rem;

&:hover {
    background-color: #faead3;
}
`

const ItemQuantity = styled.h5`
width: 50%;
text-align: center;
margin: auto 0;
font-size: 0.75rem;
`

const RemoveItem = styled.button`
background-color: transparent;
border: none;
height: 2.55rem;
width: 2.55rem;
border-radius: 50%;

&:hover {
    background-color: #faead3;
}
`

const RemoveItemIcon = styled(Icon)`
height: 1.85rem;
width: 1.85rem;
`

interface props {
    item: item;
}

export const BasketItem: React.FC<props> = ({item}) => {
    const dispatch = useDispatch();

    const sizeInfo = item.sizes[item.sizeIndex];

    const price = sizeInfo.price * item.quantity;

    const handleAdjust = (action: "add" | "subtract") => {
        if (action === "add") {
            dispatch(increaseQuantity(item));
        } else {
            dispatch(decreaseQuantity(item));
        }
    }

    const handleRemove = () => {
        dispatch(removeItem(item))
    }

    return (
        <BasketItemWrapper>
            <BasketItemContainer>
                <ItemImage src={require(`../../assets/ProductImages/${item.image}`).default} alt="Product Preview" />
                <ItemTitle>{item.name}</ItemTitle>
                <RemoveItem onClick={handleRemove}><RemoveItemIcon icon="ant-design:delete-outlined" /></RemoveItem>
                <ItemSize>Size: {sizeInfo.size}g</ItemSize>
                <QuantitySection>
                    <AdjustQuantity onClick={() => handleAdjust("subtract")}>-</AdjustQuantity>
                    <ItemQuantity>Quantity: {item.quantity}</ItemQuantity>
                    <AdjustQuantity onClick={() => handleAdjust("add")}>+</AdjustQuantity>
                </QuantitySection>
                <ItemPrice>£{price}</ItemPrice>
            </BasketItemContainer>

        </BasketItemWrapper>
    )
}