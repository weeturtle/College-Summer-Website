import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const ButtonContents = styled.div`
border-radius: 1.5rem;
background-color: #607D47;
color: #FAEAD3;
font-size: 2.5rem;
height: 4rem;
width: 15rem;
display: flex;
justify-content: center;
align-items: center;
`

const Text = styled.p`
`

interface props {
    to: string;
}

export const ReadMore: React.FC<props> = ({to}) => {
    return (
        <NavLink to={to}>
            <ButtonContents>
                <Text>Read More</Text>
            </ButtonContents>
        </NavLink>
    )
}