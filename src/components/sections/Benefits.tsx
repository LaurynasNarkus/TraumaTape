import React from "react";
import BlueCheckIcon from "../../assets/images/BlueCheckIcon.svg";
import styled from 'styled-components/macro';
import { tablet } from 'styles/breakpoints';
import { benefits } from "../../assets/data/benefits";

export const Benefits: React.FC = () => {
	return (
		<SectionWrapper>
			{benefits.map((benefit) => {
				return (
					<ElementList>
						<ContentWrapper>
							<IconWrapper>
								<img src={BlueCheckIcon} alt="check icon" />
							</IconWrapper>
							<ProgramTitle>
								{benefit}
							</ProgramTitle>
						</ContentWrapper>
					</ElementList>
				)
			})}
		</SectionWrapper>
	);
};

const SectionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;

	@media ${tablet} {
		flex-direction: column;
		margin: 0 1rem;
		width: calc(100% - 2rem);
	}
`;

const RowWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: start;
	width: 48rem;
	
	@media ${tablet} {
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 1rem;
	}
`;

const SectionContent = styled.div`
	margin-right: 1rem;
	width: calc(50% - 1rem);
	align-items: center;
	@media ${tablet} {
		width: 100%;
		margin-right: 0;
}
`;

const SectionTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;
	margin-top: 1rem;
	margin-bottom: 1rem;
	font-size: 1.5rem;
	line-height: 140%;
	font-weight: 700;

	@media ${tablet} {
		width: 100%;
		margin-bottom: 1.5rem;
		margin-top: 1rem;
	}
`;

const ListContentWrapper = styled.div`
	width: 100%;
	margin-left: 1rem;
	width: calc(50% - 1rem);

	@media ${tablet} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-left: 0;
	}
`;

const ElementList = styled.div`
	width: 100%;
`;

const IconWrapper = styled.div`
	display: flex;
	align-items: center;
	margin-right: 1rem;
`;

const ContentWrapper = styled.div`
	display: flex;
	flex-direction: row;  
`

const ProgramTitle = styled.h3`
	font-weight: 500;
	margin-top: 0.5rem;
	margin-bottom: 0.5rem;
`;