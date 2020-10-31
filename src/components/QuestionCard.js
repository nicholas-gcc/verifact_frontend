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

export default function QuestionCard(props) {
  const [data, setData] = useState({ dateCreated: "TBC", text: "", newsUrl: "", newsTitle: "", newsImage: "" })
  const { questionId } = props

  useEffect(() => {
    setData(getQuestionById(questionId))
  }, [questionId])

  return <CustomLink to={'/question/' + questionId}>
    <Wrapper style={{ cursor: 'pointer' }}>
      <InnerWrapper >
        <Title>{data.text}</Title>
        <OpenGraphMeta mediaUrl={data.newsUrl} mediaTitle={data.newsTitle} mediaImage={data.newsImage} />
      </InnerWrapper>
    </Wrapper>
  </CustomLink>
}

const Wrapper = styled.div`
  display: grid;
`;

const InnerWrapper = styled.div`
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
`;

const CustomLink = styled(Link)`
  color: black;
  &:hover{
    color: black;
    text-decoration: none;
  }
`;