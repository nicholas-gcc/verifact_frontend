import React, { useState } from "react";
import styled from "styled-components";
import { IoMdCloseCircle } from "react-icons/io";

const close = (display, setDisplay) => {
  setDisplay(!display);
}

export default function NotificationCard(props) {
  const [display, setDisplay] = useState(true)
  const welcomeTitle = "Your home for verifying credible news"
  const welcomeContent = "Post a question to our community of news sleuths to get answers" +
    "and new perspectives about the news your reading"

  return <>{display ? (<Wrapper>
    <HeaderWrapper>
      <Button onClick={() => close(display, setDisplay)}><IoMdCloseCircle style={{ fontSize: '20px' }} /></Button>
    </HeaderWrapper>
    <ContentWrapper>
      <h1>{welcomeTitle}</h1>
      <p>{welcomeContent}</p>
    </ContentWrapper>
  </Wrapper>) : null}</>
    ;
}

const Button = styled.button`
  background: none;
  border: none;
`;

const ContentWrapper = styled.div`
  display: grid;
  justify-items: center;
  padding-top: 80px;
  padding-bottom: 118px;
`;

const HeaderWrapper = styled.div`
  height: 54px;
  text-align: right;
  padding-right: 15px;
  padding-top: 17px;
  padding-bottom: 17px;
`;

const Wrapper = styled.div`
  background: #FFB800;
`;