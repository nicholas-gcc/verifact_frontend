import React, { useEffect, useState } from "react";
import OpenGraphMeta from "./OpenGraphMeta"
import styled from "styled-components";
import { useHistory } from "react-router-dom";


const getQuestionById = (questionId) => {
  /* TODO: Get question data via question ID
     Expect return result: dict() */
  const result = {
    dateCreated: "July 1, 2020",
    text: "Is it true that everything happens for a reason?",
    newsUrl: "https://www.notion.so/Contentforslides28bb12e73c124253b1513f5aa4cb1ec3",
    newsTitle: "Is it true that everything happens for a reason? Is it true that everything happens for a reason? Is it true that everything happens for a reason? Is it true that everything happens for a reason?",
    newsImage: "https://media.proprofs.com/images/QM/user_images/2503852/1568196428.jpg"
  }
  return result
}

const getAnswerByQuestionId = (questionId) => {
  /* TODO: Get question data via question ID
     Expect return result: dict() */
  const result = {
    totalCount: 42,
    numberOfTrue: 32,
    numberOfFalse: 10
  }
  return result
}

const handleClick = (history, question_id) => {
  history.push("/question/" + question_id);
}

export default function QuestionCard(props) {
  const [question, setQuestion] = useState({ dateCreated: "TBC", text: "", newsUrl: "", newsTitle: "", newsImage: "" })
  const [answer, setAnswer] = useState({ totalCount: 0, numberOfTrue: 0, numberOfFalse: 0 })
  const { questionId } = props
  let history = useHistory();

  useEffect(() => {
    setQuestion(getQuestionById(questionId))
    setAnswer(getAnswerByQuestionId(questionId))
  }, [questionId])

  return <div onClick={() => handleClick(history, questionId)} style={{ cursor: 'pointer' }}>
    <Wrapper>
      <Title>{question.text}</Title>
      <QuantityText>{answer.totalCount} answer ({answer.numberOfTrue} true, {answer.numberOfFalse} false)</QuantityText>
      <InnerWrapper>
        <OpenGraphMeta mediaUrl={question.newsUrl} mediaTitle={question.newsTitle} mediaImage={question.newsImage} />
      </InnerWrapper>
      <Text>Asked on {question.dateCreated}</Text>
    </Wrapper>
  </div>
}

const Wrapper = styled.div`
  display: grid;
  cursor: pointer;
`;

const InnerWrapper = styled.div`
  margin-bottom: 2rem;
`;

const Title = styled.h1`
  color: #30323D;
  font-size: 2.1rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const QuantityText = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 2rem;
`;

const Text = styled.p`
  color: #30323D;
  font-size: 1.4rem;
`;