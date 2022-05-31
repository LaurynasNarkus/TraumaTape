import React from "react";
import { selectCurrentQuestion } from "../../state/questionsSlice";
import { useAppSelector } from "../../state/hooks";
import { questions } from "../../assets/data/questions";
import { BackButton,
    BackButtonWrapper,
    Header,
    HeaderWrapper,
    LeaveEmail,
    Logo,
    PageNumberWrapper,
    ProgressBar,
    Question,
    QuestionWrapper,
    QuizWrapper
} from 'components';

const Quiz: React.FC = () => { 
    const currentQuestion = useAppSelector(selectCurrentQuestion);

    return(
        <QuizWrapper>
            <HeaderWrapper>
                <Header>
                    {
                        currentQuestion > 1
                            ? <BackButtonWrapper><BackButton/></BackButtonWrapper>
                            : <BackButtonWrapper><BackButton hidden/></BackButtonWrapper>
                    }
                    <Logo />
                    <PageNumberWrapper>{currentQuestion} / {questions.length + 1}</PageNumberWrapper>
                </Header>
                <ProgressBar progression={(currentQuestion) / (questions.length + 1)}/>
            </HeaderWrapper>
            <QuestionWrapper>
                {
                    currentQuestion === questions.length + 1
                        ? <LeaveEmail/>
                        : <Question/>
                }
            </QuestionWrapper>
        </QuizWrapper>
    )
}

export default Quiz;