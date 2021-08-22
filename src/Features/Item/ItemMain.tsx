import { item } from "./itemSlice";
import styled from "styled-components";
import { AddToCartDropDown } from "../../components/AddToCartDropDown";
import { DetailsButton } from "../../components/DetailsButton";

const ProductMainWrapper = styled.div`
width: 100%;
`

const ProductInformation = styled.div`
width: 37.5rem;
height: 22.5rem;
position: absolute;
display: inline-block;
top: 5rem;
right: 15%;
`

const ProductImage = styled.img`
height: 35rem;
position: relative;
top: 2rem;
left: 5%;
z-index: 2;
display: inline-block;
`

const ProductStatsWrapper = styled.div`
background-color: #FFF3E1;
height: 10rem;
width: 100%;
position: absolute;
bottom: 0;
`

const ProductStatsContainer = styled.div`
width: 35%;
height: 7.5rem;
position: absolute;
right: 11%;
bottom: 12.5%;
display: flex;
justify-content: space-between;
align-items: center;
`

const IndividualStat = styled.div`
text-transform: capitalize;
`

const StatHeader = styled.h4`
color: #535353;
font-size: 1.5rem;
`

const StatInfo = styled.h4`
color: #607D47;
font-size: 1.75rem;
margin-top: 1rem;
`

const ProductTitle = styled.h2`
font-size: 3.2rem;
color: #607D47;
`

const ProductOrigin = styled.h3`
font-size: 2.5rem;
color: #535353;
padding-top: 0.85rem;
`

const ProductDescription = styled.p`
font-size: 1.5rem;
color: #535353;
padding-top: 0.85rem;
`

const CartSection = styled.div`
display: flex;
width: 100%;
justify-content: space-between;
align-items: flex-start;
z-index: 3;
position: absolute;
top: 20rem;
`

interface props {
    item: item;
}

export const ItemMain: React.FC<props> = ({item}) => {
    if (!item) {
        return null
    }
    
    return (
        <ProductMainWrapper>
            <ProductImage src={require(`../../assets/ProductImages/${item.image}`).default} />
            <ProductInformation>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductOrigin>{item.location}</ProductOrigin>
                <ProductDescription>{item.description}</ProductDescription>
                <CartSection>
                    <AddToCartDropDown item={item}/>
                    <DetailsButton itemId={item.id}/>
                </CartSection>
            </ProductInformation>
            <ProductStatsWrapper>
                <ProductStatsContainer>
                    <IndividualStat>
                        <StatHeader>Origin</StatHeader>
                        <StatInfo>{item.location}</StatInfo>
                    </IndividualStat>
                    <IndividualStat>
                        <StatHeader>Flavour</StatHeader>
                        <StatInfo>{item.notes[0]} and {item.notes[1]}</StatInfo>
                    </IndividualStat>
                    <IndividualStat>
                        <StatHeader>Roast</StatHeader>
                        <StatInfo>{item.roast}</StatInfo>
                    </IndividualStat>
                </ProductStatsContainer>
            </ProductStatsWrapper>
        </ProductMainWrapper>
    )
}