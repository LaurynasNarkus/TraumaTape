import React from "react";
import styled from 'styled-components/macro';
import { tablet } from 'styles/breakpoints';
import { ratings } from "../../assets/data/ratings";
import { Rating } from "components";
  
export const UserRatings: React.FC = () => {
    return (
        <RatingsWrapper>            
            <SectionWrapper>
                {ratings.map((rating) => {
                    return(
                        <Rating
                            title={rating.title}
                            subtitle={rating.subtitle}
                            rate={rating.rate}
                        />
                    )
                })}
            </SectionWrapper>
        </RatingsWrapper>
    );
};

const RatingsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    width: 50rem;

    @media ${tablet} {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        overflow-x: hidden;
    }
`;

const SectionWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: stretch;
    width: 100%;

    @media ${tablet} {
        flex-direction: column;
        margin-left: 2rem;
        width: 100%;
    }
`;