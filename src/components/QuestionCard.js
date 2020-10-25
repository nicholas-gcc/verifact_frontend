import React, { useEffect, useState } from "react";
import OpenGraphMeta from "./OpenGraphMeta"
import styled from "styled-components";
import { Link } from "react-router-dom";


const getQuestionById = (question_id) => {
  /* TODO: Get question data via question ID
     Expect return result: dict() */
  const result = {
    date_created: "July 1, 2020",
    text: "Is it true that everything happens for a reason?",
    news_url: "https://www.notion.so/Contentforslides28bb12e73c124253b1513f5aa4cb1ec3",
    news_title: "Is it true that everything happens for a reason? Is it true that everything happens for a reason? Is it true that everything happens for a reason? Is it true that everything happens for a reason?",
    news_image: "https://media.proprofs.com/images/QM/user_images/2503852/1568196428.jpg"
  }
  return result
}

export default function QuestionCard(props) {
  const [data, setData] = useState({ date_created: "TBC", text: "", news_url: "", news_title: "", news_image: "" })
  const { question_id } = props

  useEffect(() => {
    setData(getQuestionById(question_id))
  }, [question_id])

  return <CustomeLink to={'/question/' + question_id}>
    <Wrapper style={{ cursor: 'pointer' }}>
      <InnerWrapper >
        <Title>{data.text}</Title>
        <OpenGraphMeta media_url={data.news_url} media_title={data.news_title} media_image={data.news_image} />
      </InnerWrapper>
    </Wrapper>
  </CustomeLink>
}

const Wrapper = styled.div`
  display: grid;
  padding-top: 60px;
`;

const InnerWrapper = styled.div`
  margin-bottom: 15px;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: bold;
`;

const CustomeLink = styled(Link)`
  color: black;
  &:hover{
    color: black;
    text-decoration: none;

  }
`;