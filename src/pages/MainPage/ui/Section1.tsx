import styled from "@emotion/styled";
import { FC } from "react";
import YouTube from "react-youtube";

const FirstSection: FC = () => {
    return (
        <FirstSectionContainer>
            <TextContainer>
                <SectionTitle>Most important title on the page</SectionTitle>
                <SectionText>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea asperiores natus impedit ullam, est obcaecati omnis quam explicabo eos aspernatur ex molestias, voluptatem eligendi ipsam quia maxime reprehenderit possimus facere.
                </SectionText>
            </TextContainer>
            <VideoContainer videoId="dQw4w9WgXcQ"/>
        </FirstSectionContainer>
    )
}

const FirstSectionContainer = styled.section`
    display: flex;
    width: 100%;
    height: 40vh;
    padding: 20px;
    background: #f5f5f5;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`
const SectionTitle = styled.h1`
    font-size: 2.5rem;
    margin-bottom: 20px;
`

const TextContainer = styled.div`
    flex: 1;
    padding-right: 20px;
`

const SectionText = styled.p`
    font-size: 1rem;
`

const VideoContainer = styled(YouTube)`
    flex: 1;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export { FirstSection }
