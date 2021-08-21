import styled from "styled-components";
import { Icon } from '@iconify/react';

const FilterButtonContainer = styled.button`
width: 9.5rem;
height: 3rem;
background-color: #FFF3E1;
color: #707070;
border: none;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: space-evenly;
`

const StyledIcon = styled(Icon)`
width: 35px;
height: 35px;
`

const Text = styled.p`
font-size: 1.5rem;
`
export const FilterButton: React.FC = () => {
    return (
        <FilterButtonContainer>
            <StyledIcon icon="ant-design:menu-outlined" />
            <Text>Filter</Text>
        </FilterButtonContainer>
    )
}