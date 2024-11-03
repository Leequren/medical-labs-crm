import styled from "styled-components"
import { InWorkCardItem } from "./InWorkCardItem"

const InWorkCardStyled = styled.div`
    display: flex;
    padding: 40px 0;
    gap: 25px;
    width: 100%;
    overflow-x: scroll;
`

export function InWorkCard() {
    return (
        <InWorkCardStyled>
            <InWorkCardItem />
            <InWorkCardItem />
            <InWorkCardItem />
            <InWorkCardItem />
            <InWorkCardItem />
        </InWorkCardStyled>
    )
}