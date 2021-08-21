import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ROUTES from '../../app/routes';

const HeaderWrapper = styled.div`
position: fixed;
width: 100%;
height: 4.5rem;
left: 0px;
top: 0px;
background: #F9EAD0;
z-index: 100;
`

const HeaderContainer = styled.div`
height: 100%;
width: 100%;
padding: 1.25rem;
display: flex;
justify-content: space-between;
align-items: center;
`

const Logo = styled.h1`
font-size: 2rem;
`

const NavContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
height: 100%
min-width: 18rem;
width: 25%;
`

const Link = styled(NavLink)`
text-align: center;
font-size: 1.5rem;
`

const IconsWrapper = styled.div`
height: 100%;
width: 7%;
display: flex;
`

const HeaderIcon = styled(Icon)`
height: 100%;
width: 100%;
`

export const Header: React.FC = () => {
    return (
        <HeaderWrapper>
            <HeaderContainer>
                <Logo>CoffTea</Logo>
                <NavContainer>
                    <Link to={ROUTES.homeRoute()}>Home</Link>
                    <Link to={ROUTES.shopRoute()}>Shop</Link>
                    <Link to={ROUTES.aboutUsRoute()}>About Us</Link>
                    <Link to={ROUTES.blogsRoute()}>Blog</Link>
                </NavContainer>
                <IconsWrapper>
                    <HeaderIcon icon="akar-icons:shopping-bag" />
                    <HeaderIcon icon="iconoir:profile-circled" />
                </IconsWrapper>
            </HeaderContainer>
        </HeaderWrapper>
    )
}