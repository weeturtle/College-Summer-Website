import styled from "styled-components";
import { item } from "../Item/itemSlice";

const BasketItemContainer = styled.div`
`

interface props {
    item: item;
}

export const BasketItem: React.FC<props> = ({item}) => {
    return (
        <BasketItemContainer>

        </BasketItemContainer>
    )
}