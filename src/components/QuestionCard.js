import React, { useEffect, useState } from "react";
import OpenGraphMeta from "./OpenGraphMeta"
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const getQuestionById = (question_id) => {
  /* TODO: Get question data via question ID
     Expect return result: dict() */
  const result = {
    date_created: "July 1, 2020",
    text: "Is it true that everything happens for a reason?",
    news_url: "https://www.notion.so/Contentforslides28bb12e73c124253b1513f5aa4cb1ec3",
    news_title: "Is it true that everything happens for a reason? Is it true that everything happens for a reason? Is it true that everything happens for a reason?",
    news_image: "https://media.proprofs.com/images/QM/user_images/2503852/1568196428.jpg"
  }
  return result
}

const handleClick = (history, question_id) => {
  history.push("/question/" + question_id);
}

export default function QuestionCard(props) {
  const [data, setData] = useState({ date_created: "TBC", text: "", news_url: "", news_title: "", news_image: "" })
  let history = useHistory();
  const { question_id } = props

  useEffect(() => {
    setData(getQuestionById(question_id))
  }, [question_id])

  return <Wrapper onClick={() => handleClick(history, question_id)} style={{ cursor: 'pointer' }}>
    <div style={{ paddingLeft: "20px", marginBottom: '15px' }}>
      <h1 style={{ fontSize: '25px', fontWeight: 'bold' }}>{data.text}</h1>
      <OpenGraphMeta media_url={data.news_url} media_title={data.news_title} media_image={data.news_image} />
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  padding-top: 60px;
`;