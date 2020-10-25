import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";

import styled from "styled-components";


const getAnswerByID = (answer_ids) => {
  /*TODO: get answer infor via answer_ids tho API
  Expected return from API, 
  Eg. {answer:ENUM, avatar:string, username:string, question:string, media_url:string, media_title:string, media_image:string, votes:array} */
  const dict = { 0: ["True", "#23BE7B"], 1: ["False", "red"], 2: ["Maybe", "yellow"] }

  const result = {
    answer: 0,
    text: "React makes it painless to create interactive UIs. Design simple views for each state in your application, and React will efficiently update and render just the right components when your data changes.",
    news_url: "channelnewsasia.com",
    news_title: "Is it true that everything happens for a reason? Is it true that everything happens for a reason? Is it true that everything happens for a reason? Is it true that everything happeIs it true that everyt reason?",
    credible_count: 93,
    not_credible_count: 23,
    username: "Mr. ABC",
    media_image: "https://media.proprofs.com/images/QM/user_images/2503852/1568196428.jpg"
  }
  const conv_answer = dict[result.answer]
  result.answer = conv_answer
  return result
}

export default function AnswerCard(props) {
  const { answer_ids } = props
  const [data, setData] = useState({ answer: [], avatar: "", username: "", question: "", media_url: "", media_title: "", media_image: "", credible_count: 0, not_credible_count: 0 })

  useEffect(() => {
    setData(getAnswerByID(answer_ids))
  }, [answer_ids]);

  // console.log(data)
  return <Wrapper>

    <h2 style={{ fontWeight: "bold", color: data.answer[1] }}>{data.answer[0]}</h2>

    <p >Asked by <b>{data.username}</b> </p>
    <p>{data.text}</p>

    <MediaWrapper>
      <div>
        <FiExternalLink />
      </div>
      <div>
        <a onClick={event => { event.stopPropagation(); }} href={data.news_url} >{data.news_url}</a>
      </div>
      <MediaTitleWrapper>
        <MediaTitle>{data.news_title}</MediaTitle>
      </MediaTitleWrapper>
    </MediaWrapper>

    <ButtonWrapper>
      <div>
        <CustomButton style={{ background: "#23BE7B" }}>
          {data.credible_count} Credible
      </CustomButton>
      </div>
      <div>
        <CustomButton style={{ background: "#E55934" }}>
          {data.not_credible_count} Not Credible
      </CustomButton>
      </div>
    </ButtonWrapper>
  </Wrapper>
}

const Wrapper = styled.div`
  display: grid;
  background: #EEF0F2;
  padding: 15px 30px;
  margin: 30px 0px;
  border-radius: 20px;
`;

const MediaWrapper = styled.div`
  min-width: 0;
  display: flex;
  align-items: center; 
  margin-bottom: 15px;
`;

const MediaTitleWrapper = styled.div`
  min-width: 0;
  padding: 0 10px;
`;

const MediaTitle = styled.p`
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const CustomButton = styled.button`
  border-radius: 5px;
  border-style: none;
  width: 100%;
  color: white;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  gap: 10px;
`;
