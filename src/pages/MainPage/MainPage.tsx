import styled from "styled-components"
import { OrdersStatus } from "./ordersStatus/OrdersStatus"

const MainPageStyled = styled.div`
	width: 100%;
	margin-right: 50px;
`

export function MainPage() {
	return (
		<MainPageStyled>
            <OrdersStatus />
		</MainPageStyled>
	)
}