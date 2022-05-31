import styled from 'styled-components/macro';

export const ProgressBar = styled.div.attrs((props: {progression: number}) => props)`
	height: ${props => props.theme.space.s8};
	background: ${props => props.theme.colors.primary};
	width: ${props => props.progression * 100}%;
`