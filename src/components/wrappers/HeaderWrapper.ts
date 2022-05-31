import styled from 'styled-components/macro';
import { Box } from 'components';
import { tablet } from 'styles/breakpoints';

export const HeaderWrapper = styled(Box)`
	font-size: ${props => props.theme.fontSizes.fs24};
	height: 6rem;
	width: 100%;

	@media ${tablet} {
		height: 4.5rem;
}
`;