import React from 'react';
import { Link } from "gatsby";

import { 
    Header,
    HeaderWrapper,
	Image,
	ImageBottomWrapper,
	LandingCard,
    Logo,
    LandingWrapper,
	StartCard
} from 'components';

const Home: React.FC = () => {

return(
	<LandingWrapper>		
		<HeaderWrapper>
			<Header>
				<Logo />
			</Header>
		</HeaderWrapper>
		<Link to="/quiz"><LandingCard>Recover from an injury like a Pro Athlete.</LandingCard></Link>
		<Link to="/quiz"><StartCard>Start Now!</StartCard></Link>
		<ImageBottomWrapper>
			<Image src='hero' alt='hero' width= '100%' maxWidth= '35rem'/>
			<Image src='accent' alt='accent' width= '100vw'/>
		</ImageBottomWrapper>
	</LandingWrapper>
)
}

export default Home;
