import styled from "styled-components/macro";
import { tablet } from "styles/breakpoints";

export const ImageWrapper = styled.img`
		border-radius: 1rem;
		max-width: 25rem;
    	margin-bottom: 1rem;

	@media ${tablet} {
		border-radius: 1rem;
    	max-width: 25rem;
    	margin-bottom: 1rem;
    	width: calc(100% - 1rem);
	}
	`;

	