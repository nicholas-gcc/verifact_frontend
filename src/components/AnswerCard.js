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
  return <Container>
    <div>
      <Answer style={{ fontWeight: "bold", color: data.answer[1] }}>{data.answer[0]}</Answer>
    </div>
    <div>
      <User>Asked by <b>{data.username}</b> </User>
    </div>
    <div>
      <Explain>{data.text}</Explain>
    </div>
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
        <VoteButton style={{ background: "#23BE7B" }}>
          {data.credible_count} Credible
      </VoteButton>
      </div>
      <div>
        <VoteButton style={{ background: "#E55934" }}>
          {data.not_credible_count} Not Credible
      </VoteButton>
      </div>
    </ButtonWrapper>
  </Container>
}

const Container = styled.div`
  display: grid;
  grid-template-rows: auto;
  grid-row-gap: 1rem;
`;


const Answer = styled.h2`
  font-family: SF Pro Display;
  font-size: 2.1rem;
  font-style: normal;
  font-weight: 700;
  line-height: 2.5rem;
  letter-spacing: 0rem;
  margin: 0;
`;

const User = styled.p`
  margin: 0;
`;

const Explain = styled.p`
  margin: 0;
`;

const MediaWrapper = styled.div`
  min-width: 0;
  display: flex;
  align-items: center; 
  margin-bottom: 1.5rem;
`;

const MediaTitleWrapper = styled.div`
  min-width: 0;
  padding: 0 1rem;
`;

const MediaTitle = styled.p`
  margin: 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const VoteButton = styled.button`
  border-radius: .5rem;
  border-style: none;
  width: 100%;
  color: white;
`;

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 13rem 13rem;
  gap: 1rem;
`;
