import styled from "@emotion/styled";
import { FC } from "react";

const Footer: FC = () => {

    return (
        <FooterContainer>
            <FooterText>Some Company 2024</FooterText>
        </FooterContainer>
    )
}

const FooterContainer = styled.header`
    width: 100%;
    height: 120px;
    display: flex;
    position: sticky;
    align-items: center;
    justify-content: center;
    background: #e7e7e7;
    padding: 40px;
    border-top: 1px solid gray;
`

const FooterText = styled.div`
    font-size: 25px;
    font-weight: 700;
`

export { Footer }