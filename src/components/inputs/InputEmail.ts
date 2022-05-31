import styled, { css } from "styled-components/macro";
import { tablet } from 'styles/breakpoints';

export const InputEmail = styled.input.attrs((props: {error: boolean}) => props)`
	align-items: center;	
	border: 0.125rem solid ${props => props.theme.colors.grey};
	border-radius: 1rem;
	box-sizing: border-box;
	color: ${props => props.theme.colors.black};
	display: flex;
	flex-direction: row;
	font-size: ${props => props.theme.fontSizes.fs24};
	justify-content: center;
	margin: 0 0.5rem;
	outline: none;
	padding: 0.5rem;
	text-transform: capitalize;
	text-align: center;	
	width: 100%;

	@media ${tablet} {
		margin: 0 0.5rem;
		width: 100%;
}

  ${props =>
	props.error &&
	css`
		  border-color: grey;
		  &:focus {
				outline: none;
				border-color: grey;
		  }
  `};
`;