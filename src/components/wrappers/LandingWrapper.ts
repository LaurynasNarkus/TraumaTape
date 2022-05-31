import styled from 'styled-components/macro';
import { Box } from 'components';

export const LandingWrapper = styled(Box)`
    align-items: center;
    background-color: ${props => props.theme.colors.black};
    display: flex;
    flex-direction: column;
    position: absolute;
    margin: 0;
    height: 100%;
    overflow: hidden;
    padding: 0;
    width: 100%;
`;