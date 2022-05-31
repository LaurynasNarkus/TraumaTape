import styled from 'styled-components/macro';
import { Box } from 'components';
import { tablet } from 'styles/breakpoints';

export const LandingCard = styled(Box)`
	background-color: ${props => props.theme.colors.black};
    color: ${props => props.theme.colors.white};
    opacity: .8;
	display: flex;
	flex-direction: column;
	font-size: ${props => props.theme.fontSizes.fs64};
	padding: 0 2rem;
	text-align: start;
	width: 50rem;
    position: absolute;
    margin: 0;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-weight: 600;

	@media ${tablet} {
		font-size: ${props => props.theme.fontSizes.fs32};
        top: 58%;
        left: 50%;
        width: 100%;
        z-index: ${props => props.theme.zIndices.upperElement};
}
`;