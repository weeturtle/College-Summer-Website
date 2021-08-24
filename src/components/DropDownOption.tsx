import styled from "styled-components"

const Option = styled.button`
color: #FAEAD3;
font-size: 1.5rem;
display: flex;
justify-content: space-between;
align-items: center;
background-color: transparent;
border: none;
width: 100%;
padding-right: 2rem;
padding-left: 0.8rem;


&:hover {
    background-color: #51693C;
}
`

const Size = styled.p`

`

const Price = styled.p`
text-align: right;
`

interface props {
    size: number;
    price: number;
    inStock?: boolean;
    sizeIndex: number;
    onClick: (size: number) => void;
}

export const CartDropOption: React.FC<props> = ({size, price, sizeIndex, onClick, inStock=true}) => {
    const handleClick = () => {
        onClick(sizeIndex);
    }
    return (
        <Option onClick={handleClick}>
            <Size>{size}g</Size>
            <Price>£{price}</Price>
        </Option>
    )
}