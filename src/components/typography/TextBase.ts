import styled from "styled-components/macro";
import { Theme } from "../../styles/theme";
import { tablet } from 'styles/breakpoints';
import {
	compose,
	fontFamily,
	margin,
	textAlign,
	alignItems,
	TextAlignProps,
	letterSpacing,
} from "styled-system";


const textBaseProps = compose(
	margin,
	textAlign,
	fontFamily,
	alignItems,
	letterSpacing,
);

interface Styles<T> extends TextAlignProps<T> {}

export const TextBase = styled.p<Styles<Theme>>`
	color: ${props => props.color};
	display: flex;
	font-size: ${props => props.theme.fontSizes.fs32};
	margin: 0;

	@media ${tablet} {
	  font-size: ${props => props.theme.fontSizes.fs24};
	}
  
	&& {
		${textBaseProps}
	}
`;