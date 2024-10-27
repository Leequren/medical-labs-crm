import styled from "styled-components";
import { NavItem } from "./navItem/NavItem";

const NavigationStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const NavItems = [
    {svgUrl: "/src/assets/img/HomeIcon.svg", routes: "/home"},
    {svgUrl: "/src/assets/img/StaffIcon.svg", routes: "/staff"},
    {svgUrl: "/src/assets/img/StatisticsIcon.svg", routes: "/statistics"},
    {svgUrl: "/src/assets/img/SalariesIcon.svg", routes: "/salaries"},
    {svgUrl: "/src/assets/img/WarehouseIcon.svg", routes: "/warehouse"},
    {svgUrl: "/src/assets/img/ArchiveIcon.svg", routes: "/archive"}
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