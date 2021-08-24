import styled from "styled-components";
import { Icon } from '@iconify/react';
import { useState } from "react";
import { CartDropOption } from "./DropDownOption";
import { useDispatch } from "react-redux";
import { addBasketItem } from "../Features/Basket/basketSlice";
import { item } from "../Features/Item/itemSlice";

const ButtonWrapper = styled.div`
background-color: #607D47;
color: #FAEAD3;
height: ${(props: {dropped?: (boolean)}) => props.dropped ? '4.25rem' : '10.85rem'};
width: 15rem;
font-size: 1.75rem;
border-radius: 1.25rem;
box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
`

const ButtonContainer = styled.div`
height: 4.25rem;
padding-left: 0.55rem;
width: 100%;
display: flex;
justify-content: center;
align-items: center;
`

const DropArrow = styled(Icon)`
height: 3.5rem;
width: 3.5rem;
`

const DropOptions = styled.div`
`

interface props {
    item: item;
}

export const AddToCartDropDown: React.FC<props> = ({item}) => {
    const dispatch = useDispatch();

    const [dropped, setDropped] = useState(true);

    const handleAddClick = (sizeIndex: number) => {
        dispatch(addBasketItem({
            ...item,
            sizeIndex
        }))
    }

    const handleDropClick = () => {
        setDropped(dropped ? false : true);
    }

    return (
        <ButtonWrapper dropped={dropped} onClick={handleDropClick}>
            <ButtonContainer>
                <p>Add To Cart</p>
                {dropped ? 
                    <DropArrow icon="ri:arrow-drop-down-line" /> : 
                    <DropArrow icon="ri:arrow-drop-down-line" vFlip={true}/>
                }
            </ButtonContainer>
            <DropOptions>
                {
                    !dropped && item.sizes.map((size, index) => <CartDropOption
                    size={size.size}
                    price={size.price}
                    inStock={size.inStock}
                    key={size.size}
                    sizeIndex={index}
                    onClick={handleAddClick}
                    />)
                }
            </DropOptions>
        </ButtonWrapper>
    )
}