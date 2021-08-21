import { Link } from "react-router-dom";
import styled from "styled-components";
import ROUTES from "../app/routes";

const ButtonWrapper = styled(Link)`
font-family: 'Allerto', sans-serif;
background-color: #707070;
height: 4.25rem;
width: 15rem;
font-size: 1.75rem;
border-radius: 1.25rem;
box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
display: flex;
justify-content: center;
align-items: center;
`

const DetailsP = styled.p`
color: #FFFDF9;

`

interface props {
    itemId: number;
}

export const DetailsButton: React.FC<props> = ({itemId}) => {
    return (
        <ButtonWrapper to={ROUTES.productRoute(itemId)}>
            <DetailsP>Details</DetailsP>
        </ButtonWrapper>
    )
}