import styled from "styled-components/macro";
import LogoSVG from "../../assets/images/logo.svg"
import { tablet } from 'styles/breakpoints';

export const Logo = styled.img`
	margin: 0;
	max-height: 6rem;
	padding: 1rem 0;
	width: auto;

	@media ${tablet} {
		height: 4rem;
	}
	`;

	Logo.defaultProps = {
		src: LogoSVG
};