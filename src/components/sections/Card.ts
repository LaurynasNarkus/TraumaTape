import styled from 'styled-components/macro';
import { Box } from 'components';
import { tablet } from 'styles/breakpoints';

export const Card = styled(Box)`
	background-color: ${props => props.theme.colors.secondary};
	border: 0.125rem solid ${props => props.theme.colors.secondary};
	border-radius: 1rem;
	display: flex;
	flex-direction: column;
	font-size: ${props => props.theme.fontSizes.fs20};
	line-height: 1.5rem;
	margin: 0 0.5rem;
	padding: 2rem;
	text-align: start;
	width: 100%;

	@media ${tablet} {
		font-size: ${props => props.theme.fontSizes.fs16};
		line-height: 1.5rem;
}
`;