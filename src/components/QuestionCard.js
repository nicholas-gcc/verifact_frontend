import React, { useEffect, useState } from "react";
import OpenGraphMeta from "./OpenGraphMeta"
import styled from "styled-components";
import { Link } from "react-router-dom";


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

export default function QuestionCard(props) {
  const [question, setQuestion] = useState({ dateCreated: "TBC", text: "", newsUrl: "", newsTitle: "", newsImage: "" })
  const [answer, setAnswer] = useState({ totalCount: 0, numberOfTrue: 0, numberOfFalse: 0 })
  const { questionId } = props

  useEffect(() => {
    setQuestion(getQuestionById(questionId))
    setAnswer(getAnswerByQuestionId(questionId))
  }, [questionId])

  return <CustomLink to={'/question/' + questionId}>
    <Wrapper>
      <Title>{question.text}</Title>
      <QuantityText>{answer.totalCount} answer ({answer.numberOfTrue} true, {answer.numberOfFalse} false)</QuantityText>
      <InnerWrapper>
        <OpenGraphMeta mediaUrl={question.newsUrl} mediaTitle={question.newsTitle} mediaImage={question.newsImage} />
      </InnerWrapper>
      <Text>Asked on {question.dateCreated}</Text>
    </Wrapper>
  </CustomLink>
}

const Wrapper = styled.div`
  display: grid;
  cursor: pointer;
`;

const InnerWrapper = styled.div`
  margin-bottom: 20px;
  @media only screen and (max-width: 600px){
    margin-bottom: 0;
  }
`;

const Title = styled.h1`
  color: #30323D;
  font-size: 25px;
  font-weight: bold;
  margin-bottom: 20px;
  @media only screen and (max-width: 600px){
    margin-bottom: 0;
  }
`;

const QuantityText = styled.p`
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 20px;
  @media only screen and (max-width: 600px){
    margin-bottom: 0;
  }
`;

const Text = styled.p`
  color: #30323D;
  font-size: 14px;
`;

const CustomLink = styled(Link)`
  color: black;
  &:hover{
    color: black;
    text-decoration: none;
  }
`;