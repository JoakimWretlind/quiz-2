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

import { data } from './quizData';

const Quiz = () => {
    const quizLength = data.length;
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [correct, setCorrect] = useState(false);

    const handleButtonClick = (isCorrect) => {
        if (isCorrect === true) {
            setScore(score + 1)
            setCorrect(true)
        } if (isCorrect === false) {
            setCorrect(false)
        }
    };

    const nextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizLength) {
            setCurrentQuestion(nextQuestion)
        } else {
            setShowScore(true)
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
                                {data[currentQuestion].questions}
                            </QuestionText>
                            <AnswerSection >
                                {data[currentQuestion].answerOptions.map((answer) =>
                                    <Button correct={correct} key={answer.answerText} onClick={() => handleButtonClick(answer.isCorrect)}>{answer.answerText}</Button >
                                )}
                            </AnswerSection>
                        </QuestionSection>
                    }
                    <NextButton onClick={() => nextQuestion()}>next question</NextButton>
                </QuizContainer>
            </QuizSection>
        </>
    )
}

export default Quiz
