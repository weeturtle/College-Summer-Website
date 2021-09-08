import { MouseEvent } from "react";
import styled from "styled-components";

interface props {
    selected?: boolean;
    value: number;
    onClick: (value: number) => void;
}

const StyledSelectorButton = styled.button`
background-color: ${(props: {selected?: (boolean)}) => props.selected ? '#626262' : '#C4C4C4'};
border: none;
border-radius: 100%;
height: 0.75rem;
width: 0.75rem;
z-index: 10;
`



export const SelectorButton: React.FC<props> = ({ value, onClick, selected = false }) => {

    const handleClick = (event: MouseEvent) => {
        onClick(value);
    }

    return <StyledSelectorButton selected={selected} key={value} onClick={handleClick} aria-label="Carousel selector" />
}