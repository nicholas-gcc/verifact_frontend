import React from "react";
import styled from "styled-components";
import QuestionCard from "../components/QuestionCard";
import Hero from "../components/Hero";

export default function Home(props) {
  const listQuestionId = ['1', '2']

  return <div>
    <Hero />
    <ContentWrapper>
      {listQuestionId.map((questionId) =>
        <Wrapper key={questionId}>
          <QuestionCard id={questionId} questionId={questionId} visual={true} />
        </Wrapper>
      )}
    </ContentWrapper>
  </div>
    ;
}

const ContentWrapper = styled.div`
  padding: 0 16.6rem;
  @media (max-width: 767px) {
    padding: 0 2rem;
    margin: 0;
  }
`;

const Wrapper = styled.div`
  border-bottom: 1px solid #6C718A;
  padding: 6rem 0;
  @media only screen and (max-width: 767px){
    padding: 0;
    margin: 0;
  }
`;