import styled from "styled-components"
import { OrdersStatus } from "./ordersStatus/OrdersStatus"
import { InWork } from "./inWork/InWork"

const MainPageStyled = styled.div`
	width: 100%;
	padding-top: 10px;
	overflow: hidden;
`

export function MainPage() {
	return (
		<MainPageStyled>
            <OrdersStatus />
			<InWork />
		</MainPageStyled>
	)
}