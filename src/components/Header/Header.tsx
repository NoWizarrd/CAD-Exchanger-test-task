import styled from "@emotion/styled";
import { FC } from "react";
import { MyButton } from "../Button/Button";
import { Link } from "react-router-dom";

const Header: FC = () => {

    return (
        <HeaderContainer>
            <MyLink to="/">
                <HeaderText>Some Company</HeaderText>
            </MyLink>
            <Link to="/contact">
                <MyButton>Contact us</MyButton>
            </Link>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.header`
    width: 100%;
    top: 0;
    height: 80px;
    display: flex;
    position: sticky;
    align-items: center;
    justify-content: space-between;
    background: #e7e7e7;
    padding: 40px;
    border-bottom: 1px solid gray;
`

const HeaderText = styled.div`
    font-size: 30px;
    font-weight: 700;
`

const MyLink = styled(Link)`
    text-decoration: none;
    &:visited {
        text-decoration: none;
        color: black;
    }
    &:active { 
        text-decoration: none;
        color: black;
    }
`

export { Header }