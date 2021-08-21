import styled from 'styled-components';

export const QuizSection = styled.section`
    height: 100%;
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: linear-gradient(-7deg, #C5C2B9, #C5C2B9);
`;

export const QuizContainer = styled.article`
  height: 100%;
  min-height: 20vh;
  width: 80%;
  max-width: 90rem;
  background: radial-gradient(#575449, #7B7A6A);
  padding: 2rem;
  border-radius: 1rem;
`;

export const QuizHeader = styled.h1`
  color: #ffffff;
  text-align: center;
  padding: 7rem 0 5rem;
  font-size: clamp(3rem, 10vw, 6rem);
  letter-spacing: 1rem;
`;

export const QuestionSection = styled.article`
`;

export const QuestionCount = styled.div`
  color: #ffffff;
  padding: 1rem 2rem;
  line-height: 1.4;
  font-size: 1.4rem;
  letter-spacing: .1rem;
`;

export const QuestionText = styled.p`
  color: #ffffff;
  padding: 1rem 2rem;
  line-height: 1.4;
  font-size: 2rem;
  letter-spacing: .1rem;
`;

export const AnswerSection = styled.div`  
  display: grid;
  grid-template-columns: repeat(auto, 1fr);
  @media screen and (min-width: 767px){
    grid-template-columns: repeat(2, 1fr);
  }  
`;

export const Button = styled.button`
  background: #565549;
  color: #ffffff;
  letter-spacing: .1rem;
  font-size: 1.6rem;
  height: 8rem;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem 1rem;
  outline: none;
  border: .2rem solid #ffffff;
  margin: .5rem;
  border-radius: .8rem;
  cursor: pointer;
  line-height: 1.4;
  box-shadow: 0 .3rem .6rem rgba(0,0,0,.4);
  transition: .25s ease-out;
  &:hover {
    background: #A38871;
    box-shadow: 0 .1rem .2rem rgba(0,0,0,.4);
    transform: translateY(.1rem);
  }
  &:active, &:focus{
    border: .2rem solid ${({ correct }) => (correct ? 'green' : "red")};
    background: rgba(0,0,0,.4);
  }
`;

export const NextButton = styled.button`
    margin-left: 50%;
    margin-top: 2rem;
    margin-bottom: 2rem;
    transform: translateX(-50%);
    background: #856D59;
    outline: none;
    border: .2rem solid #fff;
    height: 4rem;
    width: 100%;
    text-transform: capitalize;
    font-size: 1.6rem;
    color: #ffffff;
    letter-spacing: .1rem;
    border-radius: .5rem;
    transition: .25s ease-out;
    cursor: pointer;
    &:hover {
      background: #A38871;
      border: .2rem solid #333;
      color: #333;
    }
    @media screen and (min-width: 767px){
       width: 60%;
  }
`;

export const ScoreSection = styled.div`
  color: #ffffff;
  font-size: 3rem;
  padding: 3rem;
  letter-spacing: .3rem;  
`;