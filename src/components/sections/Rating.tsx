import React from "react";
import styled from 'styled-components/macro';
import { tablet } from 'styles/breakpoints';

type AppProps = {
    title: string;
    subtitle: string;
    rate: string;
};

export const Rating: React.FC<AppProps> = ({
    title,
    subtitle,
    rate,
}: AppProps) => {
  return (
    <SuccessStoryWrapper>
        <NameWrapper>
            {title}
        </NameWrapper>
        <StoryTextWrapper>
            {subtitle}
        </StoryTextWrapper>
        <RateWrapper>
            <img src={rate} alt="stars" />
        </RateWrapper>
    </SuccessStoryWrapper>
  );
};

const SuccessStoryWrapper = styled.div`
    display: block;
    margin: 0rem 0.5rem;
    padding: 1.5rem;
    box-shadow: 0 0.5rem 1rem 0.25rem rgba(0, 0, 0, 0.1);
    border-radius: 1rem;
    width: 100%;

    @media ${tablet} {
        margin: 1rem 0;
        padding: 1;
        width: calc(100% - 2rem);
    }
`
const NameWrapper = styled.div`
    font-weight: 700;
`;

const RateWrapper = styled.div``

const StoryTextWrapper = styled.div`
margin: 1rem 0;
`;