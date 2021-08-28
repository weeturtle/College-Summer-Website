import styled from "styled-components";

const AboutWrapper = styled.div`
position: relative;
top: 4.5rem;
`

const ComingSoon = styled.h1`
text-align: center;
font-size: 3rem;
`

const TODO = styled.h2`
font-size: 2.5rem;
`

const ItemStyle = styled.li`
font-size: 2rem;
`


export const AboutPage: React.FC = () => {
    return (
        <AboutWrapper>
            <ComingSoon>About Page Coming Soon</ComingSoon>
            <TODO>To-Do</TODO>
            <ol>
                <ItemStyle>Add more items</ItemStyle>
                <ItemStyle>Make more responsive</ItemStyle>
                <ItemStyle>Allow for mobile</ItemStyle>
                <ItemStyle>Add Checkout</ItemStyle>
                <ItemStyle>Add Profile</ItemStyle>
                <ItemStyle>Add About and Blog</ItemStyle>
                <ItemStyle>Create actual pictures</ItemStyle>
                <ItemStyle>Complete product page</ItemStyle>
            </ol>
        </AboutWrapper>
    )
}