import styled from "styled-components";
import { item } from "../Item/itemSlice";
import { AddToCartDropDown } from "../../components/AddToCartDropDown";
import { DetailsButton } from "../../components/DetailsButton";

const ProductInfoContainer = styled.div`
position: relative;
width: 38rem;
height: 24rem;
padding: 20px 30px 20px 30px;
background: rgba(255, 255, 255, 0.64);
box-shadow: 0px 2px 10px 1px rgba(0, 0, 0, 0.1);
border-radius: 40px;
`

const ItemName = styled.h2`
color: #535353;
font-size: 3rem;
display: inline-block;
`

const ItemNumber = styled.h3`
color: #607D47;
font-size: 3rem;
display: inline-block;
float: right;
`

const NameAndNum = styled.div`
width: 100%;
`

const Origin = styled.h4`
color: #607D47;
font-size: 2.25rem;
margin-top: 15px;
`

const DescriptionContainer = styled.div`
height: 150px;
display: font;
align-items: center;
`

const ItemDescription = styled.p`
font-size: 1.5rem;
color: #535353;
`

const CartSection = styled.div`
position: absolute;
top: 276px;
left: 0;
padding: 20px 30px;
width: 100%;
display: flex;
justify-content: space-between;
`

interface props {
    item: item;
}


export const ProductCardInfo: React.FC<props> = ({item}) => {
    return (
        <ProductInfoContainer>
            <NameAndNum>
                <ItemName>{item.name}</ItemName>
                <ItemNumber>No. {item.id}</ItemNumber>
            </NameAndNum>
            <Origin>{item.location}</Origin>
            <DescriptionContainer>
                <ItemDescription>{item.description}</ItemDescription>
            </DescriptionContainer>
            <CartSection>
                <AddToCartDropDown item={item} />
                <DetailsButton itemId={item.id} />
            </CartSection>
        </ProductInfoContainer>
    )
}