import * as React from "react";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../state/hooks";
import { increment, selectCurrentQuestion } from "../../state/questionsSlice";
import { questions } from "../../assets/data/questions";
import { AnswerListMultipleWrapper,
	AnswerListSingleWrapper,
	Bold,
	ImageWrapper,
	NextButton,
	Paragraph,
	SectionAnswer,
	SectionAnswerSingle,
	SectionAnswerWrapper,
	SectionWrapperRow
	} from 'components';

import {
	addInjuredBodyPart,
	addSport,
	changeAge,
	changeFitnessLevel,
	changeCurrentHealthState,
	changeWorkoutPreference,
	changeExerciseFrequency,
	removeInjuredBodyPart,
	removeSport,
	selectProfile
} from "../../state/profileSlice";

export const Question: React.FC = () => {

	const dispatch = useAppDispatch();
	const currentQuestion = useAppSelector(selectCurrentQuestion);
	const profile = useAppSelector(selectProfile);
	const [questionText, setQuestionText] = useState("How old are you?");
	const [answers, setAnswers] = useState<any>([]);

	const handleClickMultipleAnswer = (answer: any) => {
		const answerText = answer.text;
		if(questions[currentQuestion - 1].dataType === "sport") {
			if(!profile.sports.includes(answerText)) {
				dispatch(addSport(answerText));
			} else {
				dispatch(removeSport(answerText));
			}
		} else if (questions[currentQuestion - 1].dataType === "bodyPart") {
			if(!profile.injuredBodyParts.includes(answerText)) {
				dispatch(addInjuredBodyPart(answerText));
			} else {
				dispatch(removeInjuredBodyPart(answerText));
			}
		}
	}

	const handleClickPrimaryAnswer = (answer: any) => {
		if(questions[currentQuestion - 1].dataType === "age") {
			const age = answer.value;
			dispatch(changeAge(age));
		}
		if(questions[currentQuestion - 1].dataType === "currentHealthState") {
			const currentHealthState = answer.value;
			dispatch(changeCurrentHealthState(currentHealthState));
		}
		if(questions[currentQuestion - 1].dataType === "fitnessLevel") {
			const fitnessLevel = answer.value;
			dispatch(changeFitnessLevel(fitnessLevel));
		}
		if(questions[currentQuestion - 1].dataType === "workoutPreference") {
			const workoutPreference = answer.value;
			dispatch(changeWorkoutPreference(workoutPreference));
		}
		if(questions[currentQuestion - 1].dataType === "exerciseFrequency") {
			const exerciseFrequency = answer.value;
			dispatch(changeExerciseFrequency(exerciseFrequency));
		}
		dispatch(increment());
	}

	const handleClickNextButton = () => {
		if (questions[currentQuestion - 1].dataType === "sport" && profile.sports.length === 0) {
			dispatch(addSport("Other")); 
			dispatch(increment());
			return;
		}
		if (questions[currentQuestion - 1].dataType === "bodyPart" && profile.injuredBodyParts.length === 0) {
			dispatch(addInjuredBodyPart("Other"));
			dispatch(increment());
			return;
		}
		dispatch(increment());
	}

	const isSelected = (answer: any) => {
		let selectedSport = profile.sports.find(sport => sport === answer);
		let selectedInjuredBodyPart = profile.injuredBodyParts.find(injuredBodyPart => injuredBodyPart === answer);

		if (questions[currentQuestion - 1].dataType === "sport") {
			return Boolean(selectedSport);
		}
		if (questions[currentQuestion - 1].dataType === "bodyPart") {
			return Boolean(selectedInjuredBodyPart);
		}
	}

	useEffect(() => {
		setQuestionText(questions[currentQuestion - 1].text);
		setAnswers(questions[currentQuestion - 1].answers);
	}, [currentQuestion, answers]);


	return (
		<>
			<SectionWrapperRow>
				<Bold margin={2}>{questionText}</Bold>
			</SectionWrapperRow>
			{
				questions[currentQuestion - 1]?.type === "primary" &&
				<SectionWrapperRow>
					<AnswerListSingleWrapper>
							{answers?.map((answer: any, id: number) => {
								return (
									<SectionAnswerSingle primary key={id} onClick={() => handleClickPrimaryAnswer(answer)}>{answer.text}</SectionAnswerSingle>
								)
							})}
					</AnswerListSingleWrapper>
				</SectionWrapperRow>
			}
			{
				questions[currentQuestion - 1]?.type === "info" &&
				<SectionWrapperRow>
					<AnswerListMultipleWrapper>
					<ImageWrapper
								src={
									questions[currentQuestion - 1]?.dataType === "sport"
										? `./images/sports/${profile.sports[0].toLowerCase()}.png`
										: `./images/bodyParts/${profile.injuredBodyParts[0].toLowerCase().trim().replace(/ /g, '')}.png`
								}
							/>
								{
									questions[currentQuestion - 1]?.dataType === "bodyPart"
										? <Paragraph>
												Trauma Tape gently allows the free flow of blood and lymphatic fluid to cleanse and heal the 
													{
														profile.injuredBodyParts.map((bodyPart, index) => 
														bodyPart === "Other"
															? " "
															: <span key={index}>{index !== profile.injuredBodyParts.length - 1 ? " " + bodyPart + "," : " " + bodyPart} </span>
														) 
													} 
												inflammation without the use of medications or surgery.
											</Paragraph>
										: <Paragraph>{answers[0]?.text}</Paragraph>
								}
						<NextButton onClick={() => handleClickNextButton()}>Okay, got it!</NextButton>
					</AnswerListMultipleWrapper>
					</SectionWrapperRow>
			}
			{
				questions[currentQuestion - 1]?.type === "multiple" &&
					<SectionWrapperRow>
							<AnswerListMultipleWrapper>
								{answers?.map((answer: any, indexMultiple: number) => {
									return (
										<SectionAnswerWrapper key={indexMultiple}>
											<SectionAnswer selected={isSelected(answer.text)} onClick={() => handleClickMultipleAnswer(answer)}>{answer.text}</SectionAnswer>
										</SectionAnswerWrapper>
									)
								})}
								<NextButton onClick={() => handleClickNextButton()}>Next</NextButton>
							</AnswerListMultipleWrapper>
					</SectionWrapperRow>
				}
		</>
	)
}