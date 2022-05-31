import React, { useState } from "react";
import { Benefits, Plan } from 'components'
import { Link } from "gatsby";
import { plans } from "../../assets/data/plans";
import styled from 'styled-components/macro';
import { tablet } from 'styles/breakpoints';

export const CheckoutSection: React.FC = () => {

	const [selectedIndex, setSelectedIndex] = useState(0);

	const handleChangeIndex = (index: number) => {
	setSelectedIndex(index);
	};

	return (
		<SectionWrapper>
			<ProgramW>
				<ProgramDescription>
					<BoldHeader>
						Select the best offer which suits your needs the best
					</BoldHeader>
					{plans.map((plan, index) => (
					<Plan
						key={index}
						{...plan}
						selected={index === selectedIndex}
						changeIndex={() => handleChangeIndex(index)}
					/>
					))}
					<ButtonGetPlanWrapper>
						<FullWidthWrapper>
							<Link style={{ textDecoration: 'none' }} to="/congrats">
								<ButtonGetPlan>Get your plan</ButtonGetPlan>
							</Link>
						</FullWidthWrapper>
					</ButtonGetPlanWrapper>
				</ProgramDescription>
				<ProgramContentWrapper>
					<SectionTitleWrapper>
						<ProgramQuestion>Why you should choose Trauma Tape?</ProgramQuestion>
					</SectionTitleWrapper>
					<Benefits />
				</ProgramContentWrapper>
			</ProgramW>
		</SectionWrapper>
	);
};

const SectionWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;

	@media ${tablet} {
		flex-direction: column;
		width: calc(100% - 2rem);
	}
`;

const ProgramW = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: start;
	width: 48rem;
	
	@media ${tablet} {
		display: flex;
		flex-direction: column;
		width: 100%;
	}
`;

const ProgramDescription = styled.div`
	display: block;
	height: 100%;
	width: calc(50% - 1rem);
	margin-right: 1rem;

	@media ${tablet} {
		width: 100%;
		margin-right: 0;
}
`;

const ProgramContentWrapper = styled.div`
	display: block;
	width: calc(50% - 1rem);
	height: 100%;
	margin-left: 1rem;

	@media ${tablet} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100%;
		margin-top: 2.5rem;
		margin-left: 0;
	}
`;

const SectionTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: start;
	align-items: center;

	@media ${tablet} {
		width: 100%;
		margin-bottom: 1.5rem;
		margin-top: 1rem;
	}
`;

const BoldHeader = styled.div`
	display: block;
	font-size: 1.5rem;
	line-height: 140%;
	font-weight: 700;

	@media ${tablet} {
		text-align: center;
	}
`;

const FullWidthWrapper = styled.div`
	width: 100%;
`;

const ButtonGetPlanWrapper = styled.div`
	display: flex;
	flex-direction: row;
	justify-content: center;
	width: 100%;
	margin-top: 1rem;

	@media ${tablet} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		width: 100%;
	}
`;

const ButtonGetPlan = styled.button`
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
	background-color: ${props => props.theme.colors.primary};
	border: none;
	width: 100%;
	height: 100%;
	padding: 1.25rem;
	color: ${props => props.theme.colors.white};
	font-size: 1.5rem;
	font-weight: 700;
	border-radius: 1rem;
	cursor: pointer;

	&:hover {
		background: ${props => props.theme.colors.secondary};
}

	@media ${tablet} {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		border: none;
		width: 100%;
		height: 100%;
		border-radius: 1rem;
		padding: 1.25rem;
		color: ${props => props.theme.colors.white};
		font-size: 1.5rem;
		font-weight: 700;
		cursor: pointer;
	}
`;

const ProgramQuestion = styled.div`
	display: block;
	font-size: 1.5rem;
	line-height: 140%;
	font-weight: 700;

	@media ${tablet} {
		text-align: center;
	}
`;