import React, { useEffect, useState } from "react";
import OpenGraphMeta from "./OpenGraphMeta"
import { Button } from "react-bootstrap";
import { IoMdArrowDropup } from "react-icons/io";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

const getQuestionById = (question_id) => {
  /* TODO: Get question data via question ID
     Expect return result: dict() */

  // retrun {up_votes:"", username:"", ....}
}

const clickhandle = (history, question_id) => {
  console.log("enter  ")
  history.push("/question/" + question_id);
}

export default function QuestionCard(props) {
  const [data, setData] = useState({ up_votes: "12", username: "" })
  let history = useHistory();
  const { question_id } = props
  const up_votes = "1100"
  const username = "Mr. ABC"
  const question = "Is it true that everything happens for a reason?"
  const media_url = "https://www.notion.so/Contentforslides28bb12e73c124253b1513f5aa4cb1ec3"
  const media_title = "Is it true that everything happens for a reason? Is it true that everything happens for a reason? Is it true that everything happens for a reason?"
  const media_image = "https://media.proprofs.com/images/QM/user_images/2503852/1568196428.jpg"
  const date_created = "July 1, 2020"
  const nums_answer = "42"
  const nums_true = "32"
  const nums_false = "10"

  useEffect(() => {
    setData(getQuestionById(question_id))
  }, [question_id])

  return <Wrapper onClick={() => clickhandle(history, question_id)} style={{ cursor: 'pointer' }}>
    <div style={{ paddingRight: '20px' }}>
      <CustomButton variant="warning" ><IoMdArrowDropup style={{ fontSize: '30px' }} /><div>{up_votes}</div></CustomButton>
    </div>
    <div style={{ paddingLeft: "20px", marginBottom: '15px' }}>
      <h1 style={{ fontSize: '25px', fontWeight: 'bold' }}>{question}</h1>
      <p style={{ fontWeight: 'bold' }}>{nums_answer} answers ({nums_true}true, {nums_false}false)</p>

      <OpenGraphMeta media_url={media_url} media_title={media_title} media_image={media_image} />

      <ContentWrapper>
        <p >Asked by <b>{username}</b> on {date_created}</p>
      </ContentWrapper>
    </div>
  </Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 85px  auto;
  padding-top: 60px;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-columns: auto auto;
`;

const CustomButton = styled(Button)`
  height: 55px;
  width: 55px;
  padding: 0px;
  border-radius: 10px;
`;