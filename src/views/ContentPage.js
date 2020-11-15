import React, { useState, useEffect } from "react";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import QuestionCard from "../components/QuestionCard";
import AnswerCard from "../components/AnswerCard";
import SubmitAnswerForm from "../components/SubmitAnswerForm";

const getAllAnswersIdByQuestionId = (question_id) => {
  /* TODO get AnswerId tho API, 
  Expected return from API, Eg. [1,23,38,98] */
  return [1, 23, 38, 98]
}

export default function ContentPage(props) {
  const question_id = props.match.params.id;
  const [answersId, setAnswersId] = useState([])
  const [visual, setVisual] = useState(false)

  useEffect(() => {
    setAnswersId(getAllAnswersIdByQuestionId(question_id))
  }, [question_id]);

  const handleOnClick = () => {
    console.log(visual)
    setVisual(!visual)
  }

  return <Wrapper>
    <QuestionCard question_id={question_id} />
    <ContentWrapper>
      {visual ?
        (<div>
          <HeaderWrapper1>
            <FormWrapper >
              <SubmitAnswerForm />
            </FormWrapper>
            <Title >All Answer</Title>
          </HeaderWrapper1>
          {answersId.map((answer_id, i) => { return <AnswerCard key={answer_id} answer_id={answer_id} visual={false} /> })}
        </div>) :
        (<div>
          <HeaderWrapper2>
            <Title >All Answer</Title>
            <CustomButton onClick={handleOnClick}>Answer the Question</CustomButton>
          </HeaderWrapper2>
          {answersId.map((answer_id) => { return <AnswerWrapper><AnswerCard key={answer_id} answer_id={answer_id} visual={false} /></AnswerWrapper> })}
        </div>)}
    </ContentWrapper>
  </Wrapper>;
}

const Wrapper = styled(Container)`
  display: grid;
  padding: 20px 0px;
`;

const HeaderWrapper1 = styled.div`
  display: grid;
  margin-top: 6rem;
  margin-bottom: 3rem;
  grid-template-rows: auto auto;
`;

const HeaderWrapper2 = styled.div`
  display: grid;
  margin-top: 6rem;
  margin-bottom: 3rem;
  grid-template-columns: auto auto;
`;

const FormWrapper = styled.div`
  display: grid;
  justify-items: center;
  margin-bottom: 6rem;
`;

const ContentWrapper = styled.div`
  display: grid;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3.2rem;
  margin: 0;
`;

const CustomButton = styled(Button)`
  background-color: #FFB800;
  color: #30323D;
  border: none;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  transition-duration: 0.4s;
  font-weight: bold;
  font-size: 1.6rem;
  width: 20rem;
  justify-self: end;

  &:hover{
    background-color: #FFB800;
    color: #30323D;
  }
`;

const AnswerWrapper = styled.div`
  display: grid;
  background: #EEF0F2;
  padding: 15px 30px;
  margin: 30px 0px;
  border-radius: 20px;
`;
