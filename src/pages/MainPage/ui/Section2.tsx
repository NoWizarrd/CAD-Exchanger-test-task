import styled from "@emotion/styled";
import { FC } from "react";
import { MyButton } from "../../../components/Button/Button";
import { Link } from "react-router-dom";

const SecondSection: FC = () => {
    return (
        <SectionContainer>
            <SectionTitle>Also very important title</SectionTitle>
            <CardContainer>
                {[...Array(6)].map((_, index) => (
                    <Card key={index}>
                        <CardTitle>Title</CardTitle>
                        <CardText>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam mattis, leo et condimentum.</CardText>
                    </Card>
                ))}
            </CardContainer>
            <Link to='/contact'>
                <MyButton>Contact us</MyButton>
            </Link>
        </SectionContainer>
    )
}

const SectionContainer = styled.section`
    width: 100%;
    min-height: 50vh;
    padding: 20px;
    background: #ffffff;
    text-align: center;
    box-sizing: border-box;
`

const SectionTitle = styled.h2`
    font-size: 2rem;
    margin-bottom: 20px;
`

const CardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(200px, 1fr));
    gap: 20px;
    margin: 0 50px;
    margin-bottom: 20px;
    @media (max-width: 800px) {
        grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    }
`

const Card = styled.div`
    padding: 20px;
    background: #f5f5f5;
    text-align: left;
`

const CardTitle = styled.h3`
    font-size: 1.2rem;
    margin-bottom: 10px;
`

const CardText = styled.p`
    font-size: 1rem;
`

export { SecondSection }
