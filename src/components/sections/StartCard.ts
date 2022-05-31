import styled from 'styled-components/macro';
import { Box } from 'components';
import { tablet } from 'styles/breakpoints';

export const StartCard = styled(Box)`
    color: ${props => props.theme.colors.primary};
	display: flex;
	flex-direction: column;
	font-size: ${props => props.theme.fontSizes.fs40};
	padding: 0 2rem;
	text-align: start;
    position: absolute;
    margin: 0;
    top: 71%;
    transform: translate(-50%, -50%);
    font-weight: 600;
    width: 50rem;

	@media ${tablet} {
        color: ${props => props.theme.colors.black};
		font-size: ${props => props.theme.fontSizes.fs24};
        top: 94.5%;
        left: 50%;
        width: 100%;
        text-align: center;
        z-index: ${props => props.theme.zIndices.upperElement};
}
`;