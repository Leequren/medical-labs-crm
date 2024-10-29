import styled from "styled-components"
import { InWorkCardItem } from "./InWorkCardItem"

const InWorkCardStyled = styled.div`
    display: flex;
    gap: 25px;
`

export function InWorkCard() {
    return (
        <InWorkCardStyled>
            <InWorkCardItem />
        </InWorkCardStyled>
    )
}