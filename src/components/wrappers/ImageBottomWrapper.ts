import styled from 'styled-components/macro';
import { Box } from 'components';
import { tablet } from 'styles/breakpoints';

export const ImageBottomWrapper = styled(Box)`
bottom: -0.5rem;
width: 100%;
text-align: center;
//margin-right: 0rem;

@media ${tablet} {
position: absolute;
}
`;