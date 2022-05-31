import styled, {css} from "styled-components/macro";
import { tablet } from 'styles/breakpoints';

export const NextButton = styled.button.attrs((props: {disabled: boolean}) => props)`
	align-items: center;
	background: ${props => props.theme.colors.white};
	border: 0.125rem solid ${props => props.theme.colors.primary};
	border-radius: 1rem;
	box-sizing: border-box;
	color: ${props => props.theme.colors.primary};
	cursor: pointer;
	font-size: ${props => props.theme.fontSizes.fs24};
	justify-content: center;
	margin: 1rem 0.5rem;
	padding: 0.5rem;
	width: 100%;

	@media ${tablet} {
		font-size: ${props => props.theme.fontSizes.fs20};
}
  
	&:hover {
		background: ${props => props.theme.colors.primary};
		color: ${props => props.theme.colors.white};
	}

	${props =>
	  props.disabled &&
	  css`
			disabled: true;
			cursor: initial;
			background: lightgrey;
			&:hover {
				background: lightgrey;
				color: ${props => props.theme.colors.primary};
		  }
	`};
`;