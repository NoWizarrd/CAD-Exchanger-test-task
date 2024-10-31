import styled from "@emotion/styled";
import { FC } from "react";
import { FirstSection } from "./ui/Section1";
import { SecondSection } from "./ui/Section2";
import { ThirdSection } from "./ui/Section3";

const MainPage: FC = () => {
    return (
        <Main>
            <FirstSection />
            <SecondSection />
            <ThirdSection />
        </Main>
    )
}

const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export { MainPage }