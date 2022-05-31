import React, { useState } from "react";
import { Link } from "gatsby"
import {useAppSelector, useAppDispatch} from "../../state/hooks";
import {changeEmail, selectProfile} from "../../state/profileSlice";
import { Bold,
	Card,
	InputEmail,
	FlexWrapper,
	FullWidthWrapper,
	NextButton,
	SectionWrapperRow,
	Typography
} from 'components';

export const LeaveEmail: React.FC = () => {

	const profile = useAppSelector(selectProfile);
	const dispatch = useAppDispatch();
	
	const initialError = profile.email.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/) === null;
	const [mailError, setMailError] = useState(initialError);

	const handleChangeMail = (event: any) => {
		if(event.target.value.match(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/)) {
			setMailError(false);
		} else {
			setMailError(true);
		}
		dispatch(changeEmail(event.target.value));
	}

	return (
		<SectionWrapperRow>
			<FlexWrapper>
				<SectionWrapperRow>
					<Bold>Summary</Bold>
				</SectionWrapperRow>
				<SectionWrapperRow>
					<Card>
						<Typography type = 'fact'>{profile.sports[0]} athletes in the age range of {profile.age} - {profile.age + 10} years had a 95% success rate with our product.</Typography>
						<Typography type = 'fact'>{profile.fitnessLevel} athletes who exercise {profile.exerciseFrequency} and prefer {profile.workoutPreference} workouts and use our product have a 92% chance of preventing future injuries.</Typography>
						<Typography type = 'fact' margin = "s0">According to the Harvard studies elastic therapeutic tape is the best solution for people who {profile.currentHealthState}.</Typography>
					</Card>
				</SectionWrapperRow>
				<Bold>Claim your limited-time discount!</Bold>
				<InputEmail 
					placeholder="Enter your email here"
					value={profile.email}
					onChange={handleChangeMail}
					error={mailError}
				/>
				<FullWidthWrapper><Link to="/checkout"><NextButton disabled={mailError}>Continue</NextButton></Link></FullWidthWrapper>
			</FlexWrapper>
		</SectionWrapperRow>				
	)
}
