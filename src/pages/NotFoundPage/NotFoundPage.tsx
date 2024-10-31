import styled from "@emotion/styled";
import { FC } from "react";

const NotFoundPage: FC = () => {

    return (
        <Main>
            <ErrorText>
                Error 404 - page not found
            </ErrorText>
        </Main>
    )
}

const Main = styled.main`
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
`
const ErrorText = styled.div`
    font-size: 60px;
    font-weight: 700;
`

export { NotFoundPage }