import { ReactNode } from "react";
import styled from "styled-components";
import { item } from "../Item/itemSlice";
import { ProductCardInfo } from "./ProductCardInfo";

const ProductWrapper = styled.div`
display: flex;
align-items: center;
width: 70em;
`

const ProductImage = styled.img`
width: 40.5rem;
height: 30rem;
border-radius: 2.5rem;
position: relative;
${(props: {orientation: orientation}) => props.orientation === "right" && "right: 8.5rem"}
`

const InfoWrapper = styled.div`
position: relative;
z-index: 99;
${(props: {orientation: orientation}) => props.orientation === "left" && "right: 8.5rem"}
`


type orientation = "right" | "left";


interface props {
    item: item;
    children?: ReactNode;
    orientation: orientation;
}


export const ProductCard: React.FC<props> = ({item, orientation}) => {
    if (orientation === "left") {
        return (
            <ProductWrapper>
                <ProductImage src={require(`../../assets/ProductImages/${item.image}`).default} orientation={orientation} alt="Product" />
                <InfoWrapper orientation={orientation}>
                    <ProductCardInfo item={item} />
                </InfoWrapper>
            </ProductWrapper>
        )
    } else {
        return (
            <ProductWrapper>
                <InfoWrapper orientation={orientation}>
                    <ProductCardInfo item={item} />
                </InfoWrapper>
                <ProductImage src={require(`../../assets/ProductImages/${item.image}`).default} orientation={orientation} alt="Product" />
            </ProductWrapper>
        )
    }
}