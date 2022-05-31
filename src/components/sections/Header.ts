import styled from 'styled-components/macro';

export const Header = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: ${props => props.theme.colors.black};
	width: 100%;
	overflow: hidden;
`;