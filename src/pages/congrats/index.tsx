import React from "react";
import { useAppSelector } from "../../state/hooks";
import { selectProfile} from "../../state/profileSlice";
import { Bold,
	Image,
	Header,
	HeaderWrapper,
	Logo,
	QuizWrapper,
	Typography,
} from 'components';

const Congrats: React.FC = () => {

	const profile = useAppSelector(selectProfile);

	return(
		<QuizWrapper>
			<HeaderWrapper>
				<Header>
					<Logo />
				</Header>
			</HeaderWrapper>
			<Bold>Thank you for your order</Bold>
			<Image src='congrats' alt='congrats' maxWidth="100%"/>
			<Typography type = 'fact' margin= 's16'>All order details and tracking number was sent to your email: {profile.email}</Typography>
		</QuizWrapper>	
	)
}

export default Congrats;