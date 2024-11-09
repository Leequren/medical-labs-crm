import { FC, useState } from "react"
import { NavLink, useNavigate } from "react-router-dom"
import styled from "styled-components"

interface INavItemProps {
	svgUrl: string,
	route: string
}

const NavItemStyled = styled(NavLink)`
    width: 90px;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 1000px;
    background: #1C1C1C;
`;

const NavItemImageStyled = styled.img`
    height: 40px;
    width: 40px;
    background: transparent;
`;

export const NavItem: FC<INavItemProps> = ({ svgUrl, route }) => {


	return (
		<NavItemStyled to={route}>
			<NavItemImageStyled src={svgUrl} alt="" />
		</NavItemStyled>
	)
}