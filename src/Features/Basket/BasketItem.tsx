import styled from "styled-components";
import { BasketItem as item } from "./basketSlice";

const BasketItemWrapper = styled.div`
`

const BasketItemContainer = styled.div`
`

const ItemTitle = styled.h3`
`

const ItemSize = styled.h4`
`

const ItemPrice = styled.h4`
`

interface props {
    item: item;
}

export const BasketItem: React.FC<props> = ({item}) => {
    const sizeInfo = item.sizes[item.sizeIndex];

    const price = sizeInfo.price * item.quantity;

    return (
        <BasketItemWrapper>
            <BasketItemContainer>
                <ItemTitle>{item.name}</ItemTitle>
                <ItemSize>{sizeInfo.size}g</ItemSize>
                <ItemPrice>£{price}</ItemPrice>
            </BasketItemContainer>

        </BasketItemWrapper>
    )
}