import styled from "styled-components";
import { NavItem } from "./navItem/NavItem";

const NavigationStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const NavItems = [
    {svgUrl: "@img/HomeIcon.svg", routes: "/home"},
    {svgUrl: "@img/StaffIcon.svg", routes: "/staff"},
    {svgUrl: "@img/StatisticsIcon.svg", routes: "/statistics"},
    {svgUrl: "@img/SalariesIcon.svg", routes: "/salaries"},
    {svgUrl: "@img/WarehouseIcon.svg", routes: "/warehouse"},
    {svgUrl: "@img/ArchivesIcon.svg", routes: "/archive"}
]

export function Navigation() {
	return (
		<NavigationStyled>
            {NavItems.map(({svgUrl, routes}) => (
                <NavItem key={routes} svgUrl={svgUrl} routes={routes}/>
            ))}
		</NavigationStyled>
	)
}