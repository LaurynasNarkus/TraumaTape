import styled from "styled-components/macro";
import { Theme } from "../../styles/theme";

import { TextAlignProps } from "styled-system";
import { tablet } from 'styles/breakpoints';

interface Styles<T> extends TextAlignProps<T> {}

export const Paragraph = styled.div<Styles<Theme>>`
	font-size: ${props => props.theme.fontSizes.fs20};
	max-width: 23rem;
	line-height: 2.5rem;
	text-align: left;
	padding-left: 1rem;

	@media ${tablet} {

	color: ${props => props.color};
	font-size: ${props => props.theme.fontSizes.fs16};
	line-height: 2rem;
	padding: 1rem 0;
	max-width: 24rem;
	width: calc(100% - 1rem);
  }
`;