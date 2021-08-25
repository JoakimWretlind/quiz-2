import React, { useState } from 'react'
import {
    QuizSection,
    QuizContainer,
    QuizHeader,
    QuestionSection,
    QuestionCount,
    QuestionText,
    AnswerSection,
    Button,
    NextButton,
    ScoreSection
} from './Quiz.style';

import { quizData } from './quizData';

const numberOfQuestions = 5;
quizData.sort(() => 0.5 - Math.random())
    .slice(-numberOfQuestions)

const Quiz = () => {
    const quizLength = numberOfQuestions;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [correct, setCorrect] = useState(false);
    const [disable, setDisable] = useState(true);

    const handleButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1);
            setCorrect(true);
            setDisable(false);
        } if (isCorrect === false) {
            setCorrect(false);
            setDisable(false);
        }
    };

    const nextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizLength) {
            setCurrentQuestion(nextQuestion);
            setDisable(true);
        } else {
            setShowScore(true);
        }
    };

    return (
        <>
            <QuizSection >
                <QuizHeader>Quiz</QuizHeader>
                <QuizContainer >
                    {showScore ?
                        <ScoreSection >You scored {score} out of {quizLength}</ScoreSection>
                        :
                        <QuestionSection>
                            <QuestionCount >
                                <span>Question {currentQuestion + 1}</span>/{quizLength}
                            </QuestionCount>
                            <QuestionText >
                                {quizData[currentQuestion].questions}
                            </QuestionText>
                            <AnswerSection >
                                {quizData[currentQuestion].answerOptions.map((answer) =>
                                    <Button correct={correct} key={answer.answerText} onClick={() => handleButtonClick(answer.isCorrect)}>{answer.answerText}</Button >
                                )}
                            </AnswerSection>
                        </QuestionSection>
                    }
                    <NextButton disabled={disable} showScore={showScore} onClick={() => nextQuestion()}>next question</NextButton>
                </QuizContainer>
            </QuizSection>
        </>
    )
}

export default Quiz
