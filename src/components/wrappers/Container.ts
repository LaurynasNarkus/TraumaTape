import styled from 'styled-components/macro';
import { compose, position, PositionProps } from 'styled-system';

import { tablet } from 'styles/breakpoints';
import { Theme } from 'styles/theme';

const containerProps = compose(position);

export const Container = styled.div<PositionProps<Theme>>`
	margin: 0 auto;
	padding: 0 1rem;
	max-width: 72rem;

	&& {
		${containerProps};
	}

	@media ${tablet} {
		max-width: 100%;
	} ;
`;
