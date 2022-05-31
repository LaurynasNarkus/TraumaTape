import hero from 'assets/images/Hero.png';
import accent from 'assets/images/gradient.svg';
import checkIcon from 'assets/images/CheckIcon.svg';
import congrats from 'assets/images/congrats.gif';

export type Visuals = keyof typeof visuals;
export const visuals: Record<string, string> = {
	hero,
	accent,
	checkIcon,
	congrats,
};
