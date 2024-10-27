import { FC } from "react"
import styled from "styled-components"

interface INavItemProps {
    svgUrl: string,
	routes: string
}

const NavItemStyled = styled.div`
	width: 90px;
	height: 90px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	border-radius: 1000px;
	background: #1C1C1C;
`

const NavItemImageStyled = styled.img`
	height: 40px;
	width: 40px;
	background: transparent;
`

export const NavItem: FC<INavItemProps> = ({ svgUrl, routes}) => {
	return (
		<NavItemStyled onClick={() => window.location.href = routes}>
			<NavItemImageStyled src={svgUrl} alt=""/>
		</NavItemStyled>
	)
}