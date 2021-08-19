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

const Name = styled.p`

`

const Price = styled.p`
text-align: right;
`

interface props {
    name: string;
    price: number;
    inStock?: boolean;
}

export const CartDropOption: React.FC<props> = ({name, price, inStock=true}) => {
    return (
        <Option>
            <Name>{name}</Name>
            <Price>£{price}</Price>
        </Option>
    )
}