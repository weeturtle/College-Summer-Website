import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BasketItem } from "./BasketItem";
import { BasketItem as item, selectBasket, toggleBasket } from "./basketSlice";

const BasketContainer = styled.div`
height: 100%;
min-height: 10rem;
width: 20%;
background-color: #ffffff;
position: fixed;
right: 0;
top: 4.5rem;
z-index: 100;
`

const BasketHeader = styled.div`
`

const BasketTitle = styled.h3`
`

const CloseBasket = styled.button`
`

const BasketItems = styled.div`
`

const TotalSection = styled.div`
`

const CheckOut = styled.button`
`

export const Basket: React.FC = () => {
    const dispatch = useDispatch();

    const basketItems: item[] = useSelector(selectBasket);

    const handleToggleBasket = () => {
        dispatch(toggleBasket(false))
    }
    
    const calculateTotal = () => {
        let total = 0;
        basketItems.forEach((item: item) => {
            const sizeInfo = item.sizes[item.sizeIndex];
            total += sizeInfo.price * item.quantity;
        })
        return total;
    }

    return (
        <BasketContainer>
            <BasketHeader>
                <BasketTitle>Shopping Cart</BasketTitle>
                <CloseBasket onClick={handleToggleBasket}>Close</CloseBasket>
            </BasketHeader>
            <BasketItems>
                {basketItems.map((item: item, index: number) => <BasketItem item={item} key={index} />)}
            </BasketItems>
            <TotalSection>
                £{calculateTotal()}
            </TotalSection>
            <CheckOut>
                Check Out
            </CheckOut>
        </BasketContainer>
    )
}