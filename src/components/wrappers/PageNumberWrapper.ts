import styled from 'styled-components/macro';
import { tablet } from 'styles/breakpoints';

export const PageNumberWrapper = styled.p`
	color: ${props => props.theme.colors.white};
	font-size: ${props => props.theme.fontSizes.fs32};
	margin: 0;
	position: relative;
	text-align: right;
	width: 6rem;

	@media ${tablet} {
		font-size: ${props => props.theme.fontSizes.fs24};
}
`;