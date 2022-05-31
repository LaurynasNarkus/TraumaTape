import styled from 'styled-components/macro';
import {
	alignContent,
	AlignContentProps,
	alignItems,
	AlignItemsProps,
	compose,
	grid,
	GridProps,
	justifyContent,
	JustifyContentProps,
	justifyItems,
	JustifyItemsProps,
} from 'styled-system';

import { Box } from 'components';
import { Theme } from 'styles/theme';

interface Props<T>
	extends GridProps<T>,
		AlignItemsProps<T>,
		AlignContentProps<T>,
		JustifyItemsProps<T>,
		JustifyContentProps<T> {}

const gridProps = compose(
	grid,
	alignItems,
	alignContent,
	justifyItems,
	justifyContent
);

export const GridWrapper = styled(Box)<Props<Theme>>`
	display: grid;
	&& {
		${gridProps};
	}
`;
