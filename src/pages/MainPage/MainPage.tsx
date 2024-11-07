import styled from "styled-components"
import { OrdersStatus } from "./ordersStatus/OrdersStatus"
import { InWork } from "./inWork/InWork"
import { Couriers } from "./couriers/Сouriers"
import { TaskSchedule } from "./taskSchedule/TaskSchedule"

const MainPageStyled = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	padding-top: 10px;
	overflow: hidden;
	gap: 50px;
`

const TaskAndCouriersContainer = styled.div`
	display: flex;
	gap: 20px;
	justify-content: center;
`

export function MainPage() {
	return (
		<MainPageStyled>
			<OrdersStatus />
			<InWork />
			<TaskAndCouriersContainer>
				<TaskSchedule />
				<Couriers />
			</TaskAndCouriersContainer>
		</MainPageStyled>
	)
}