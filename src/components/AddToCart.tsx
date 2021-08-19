import styled from "styled-components";

const ButtonWrapper = styled.div`
background-color: #607D47;
color: #FAEAD3;
height: 4.25rem;
width: 15rem;
font-size: 1.75rem;
border-radius: 1.25rem;
box-shadow: 0px 6px 4px rgba(0, 0, 0, 0.25);
display: flex;
justify-content: center;
align-items: center;
`

export const AddToCart: React.FC = () => {
    const handleClick = () => {

    }

    return (
        <ButtonWrapper onClick={handleClick}>
            <p>Add To Cart</p>
        </ButtonWrapper>
    )
}