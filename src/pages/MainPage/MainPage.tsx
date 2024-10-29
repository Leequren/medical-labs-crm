import styled from "styled-components"
import { OrdersStatus } from "./ordersStatus/OrdersStatus"
import { InWork } from "./inWork/InWork"

const MainPageStyled = styled.div`
	width: 100%;
	margin-right: 50px;
	padding-top: 10px;
`

export function MainPage() {
	return (
		<MainPageStyled>
            <OrdersStatus />
			<InWork />
		</MainPageStyled>
	)
}