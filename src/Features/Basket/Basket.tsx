import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { BasketItem } from "./BasketItem";
import { BasketItem as item, selectBasket, toggleBasket } from "./basketSlice";
import { Icon } from '@iconify/react';

const BasketContainer = styled.div`
height: 100%;
width: 20%;
min-width: 15rem;
background-color: #ead6b8;
position: fixed;
right: 0;
top: 4.5rem;
z-index: 100;
`

const BasketHeader = styled.div`
color: #3e3e3e;
width: 100%;
height: 3rem;
background-color: #e2c69e;
`

const BasketTitle = styled.h3`
font-size: 2rem;
padding-left: 3%;
padding-top: 2%;
`

const CloseBasket = styled.button`
background-color: transparent;
border: none;
width: 1.5rem;
height: 1.5rem;
padding: 0;
position: absolute;
right: 3%;
top: 1.4%;
`

const CloseBasketIcon = styled(Icon)`
width: 100%;
height: 100%;
`

const BasketItems = styled.div`
overflow-y: auto;
height: 65%;
`

const BasketFooter = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
`

const TotalSection = styled.div`
font-size: 1.5rem;
`

const PriceSection = styled.span`
font-size: 2rem;
`


const CheckOut = styled.button`
background-color: #607D47;
border: none;
width: 50%;
height: 3.5rem;
font-size: 2rem;
color: #FAEAD3;
position: relative;
top: 2rem;
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
        return total.toFixed(2);
    }

    return (
        <BasketContainer>
            <BasketHeader>
                <BasketTitle>Shopping Cart</BasketTitle>
                <CloseBasket onClick={handleToggleBasket}><CloseBasketIcon icon="bi:x-lg" /></CloseBasket>
            </BasketHeader>
            <BasketItems>
                {basketItems.map((item: item, index: number) => <BasketItem item={item} key={index} />)}
            </BasketItems>
            <BasketFooter>
                <TotalSection>
                    Order Total: <PriceSection>£{calculateTotal()}</PriceSection>
                </TotalSection>
                <CheckOut>
                    Check Out
                </CheckOut>
            </BasketFooter>
        </BasketContainer>
    )
}