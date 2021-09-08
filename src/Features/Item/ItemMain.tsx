import { item } from "./itemSlice";
import styled from "styled-components";
import { AddToCartDropDown } from "../../components/AddToCartDropDown";
import { DetailsButton } from "../../components/DetailsButton";

const ProductMainWrapper = styled.div`
width: 100%;
height: 40rem;
display: grid;
grid-template: 30rem 10rem / 1fr 1fr;
background-color: #FAEAD3
`

const ProductInformation = styled.div`
width: 65%;
height: 100%;
display: grid;
margin: auto 0;
grid-template: 1fr 1fr 2fr minmax(4.25rem, 10.85rem) / 1fr 1fr;
top: 3rem;
position: relative;
grid-row: 1;
grid-column: 2;
z-index: 2;
`

const ProductImage = styled.img`
z-index: 2;
height: 85%;
max-width: 52rem;
width: 85%;
grid-row: 1 / 3;
grid-column: 1;
margin: auto;
object-fit: cover;
z-index: 1;
`

const ProductStatsWrapper = styled.div`
width: 75%;
height: 50%;
margin: auto 0;
grid-column: 2;
grid-row: 2;
z-index: 1;
`

const ProductStatsContainer = styled.div`
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
grid-row: 1;
grid-column: 1 / 3;
`

const ProductOrigin = styled.h3`
font-size: 2.5rem;
color: #535353;
grid-row: 2;
grid-column: 1;
`

const ProductDescription = styled.p`
font-size: 1.5rem;
color: #535353;
grid-row: 3;
grid-column: 1 / 3;
`

const CartContainer = styled.div`
grid-row: 4;
grid-column: 1;
`

const DetailContainer = styled.div`
grid-row: 4;
grid-column: 2;
`

const ColourWrapper = styled.div`
grid-row: 2;
grid-column: 1 / 3;
width: 100%;
height: 100%;
z-index: 0;
background-color: #FFF3E1;
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
            <ProductImage src={require(`../../assets/ProductImages/${item.image}`).default} alt="Product" />
            <ProductInformation>
                <ProductTitle>{item.name}</ProductTitle>
                <ProductOrigin>{item.location}</ProductOrigin>
                <ProductDescription>{item.description}</ProductDescription>
                <CartContainer>
                    <AddToCartDropDown item={item}/>
                </CartContainer>
                <DetailContainer>
                    <DetailsButton itemId={item.id}/>
                </DetailContainer>
            </ProductInformation>
            <ColourWrapper />
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