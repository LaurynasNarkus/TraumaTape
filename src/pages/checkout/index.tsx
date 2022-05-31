import React from "react";
import { Bold,
	CheckoutSection,
	QuizWrapper,
	Header,
	HeaderWrapper,
	Logo,
	UserRatings,
} from 'components';

const Checkout: React.FC = () => {

	return(
		<QuizWrapper>
			<HeaderWrapper>
				<Header>
					<Logo />
				</Header>
			</HeaderWrapper>
			<Bold>Checkout</Bold>
			<CheckoutSection />
			<Bold>Reviews</Bold>
			<UserRatings />
		</QuizWrapper>	
	)
}

export default Checkout;