import styled, {css} from "styled-components/macro";
import { tablet } from "styles/breakpoints";

export const SectionAnswerSingle = styled.div.attrs((props: {info: boolean, selected: boolean, primary: boolean}) => props)`
	align-items: center;
	background: ${props => props.theme.colors.white};
	border: 0.125rem solid ${props => props.theme.colors.grey};
	border-radius: 1rem;
	cursor: pointer;
	display: flex;
	//flex: 1;
	flex-direction: row;
	font-size: ${props => props.theme.fontSizes.fs24};
	justify-content: center;
	margin: 0 auto 1rem auto;
	max-width: 50rem;
	overflow-x: hidden;
	padding: 0.5rem;
	text-align: center;
	width: 100%;

	@media ${tablet} {
		font-size: ${props => props.theme.fontSizes.fs16};
	}

	&:active {
		background: ${props => props.theme.colors.secondary};
		border: 0.125rem solid ${props => props.theme.colors.secondary};
	}
`