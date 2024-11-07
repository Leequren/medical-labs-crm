import styled from "styled-components"
import { CouriersOrderCard } from "./CouriersOrderCard"

const CouriersCardListStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
`

export function CouriersCardList() {
    return (
        <CouriersCardListStyled>
            <CouriersOrderCard />
            <CouriersOrderCard />
            <CouriersOrderCard />
            <CouriersOrderCard />
        </CouriersCardListStyled>
    )
}