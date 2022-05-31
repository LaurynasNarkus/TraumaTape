import styled from "styled-components/macro";
import { tablet } from 'styles/breakpoints';


export const Bold = styled.span.attrs((props: {fontSize: string, margin: number}) => props)`
    font-weight: bold;
    font-size: ${props => props.theme.fontSizes.fs32};
    margin: ${props => props.theme.space.s24};
  
	@media ${tablet} {
        font-size: ${props => props.theme.fontSizes.fs24};
        margin: ${props => props.theme.space.s24};
      }
`;