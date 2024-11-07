import styled from "styled-components"
import { OrdersStatus } from "./ordersStatus/OrdersStatus"
import { InWork } from "./inWork/InWork"
import { Couriers } from "./couriers/Сouriers"

const MainPageStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-top: 10px;
	overflow: hidden;
	gap: 50px;
`

export function MainPage() {
	return (
		<MainPageStyled>
            <OrdersStatus />
			<InWork />
			<Couriers />
		</MainPageStyled>
	)
}