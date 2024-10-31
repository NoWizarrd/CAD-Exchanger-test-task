import styled from "@emotion/styled";
import { FC } from "react";
import { MyButton } from "../../../components/Button/Button";
import { Link } from "react-router-dom";

const ThirdSection: FC = () => {
    return (
        <ThirdSectionContainer>
            <SectionTitle>Less important title</SectionTitle>
            <Link to='/contact'>
                <MyButton>Contact us</MyButton>
            </Link>
        </ThirdSectionContainer>
    )
}

const ThirdSectionContainer = styled.section`
    width: 100%;
    height: 20vh;
    padding: 20px;
    background: #f5f5f5;
    text-align: center;
    box-sizing: border-box;
`

const SectionTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 30px;
`

export { ThirdSection }
