import styled from "styled-components";
import { Icon } from '@iconify/react';

const SortButtonContainer = styled.button`
width: 9.5rem;
height: 3rem;
background-color: #FFF3E1;
color: #707070;
border: none;
border-radius: 20px;
display: flex;
align-items: center;
justify-content: flex-end;
`

const StyledIcon = styled(Icon)`
width: 45px;
height: 45px;
`

const Text = styled.p`
font-size: 1.5rem;
`

export const SortButton: React.FC = () => {
    return (
        <SortButtonContainer>
            <Text>Sort By</Text>
            <StyledIcon icon="ri:arrow-drop-down-line" />
        </SortButtonContainer>
    )
}