import React from "react";
import styled from "styled-components";
import QuestionCard from "../components/QuestionCard";
import Hero from "../components/Hero";

export default function Home(props) {
  const list_questionID = ['1', '2']

  return <div>
    <Hero />
    <ContentWrapper>
      {list_questionID.map((questionID) =>
        <Wrapper key={questionID}>
          <QuestionCard id={questionID} question_id={questionID} visual={true} />
        </Wrapper>
      )}
    </ContentWrapper>
  </div>
    ;
}

const ContentWrapper = styled.div`
  padding: 0px 166px;
  @media (max-width:991px) {
    padding: 0px;
  }
`;

const Wrapper = styled.div`
  border-bottom: 1px solid #6C718A;
  padding: 60px 0;
  @media only screen and (max-width: 600px){
    padding: 0;
  }
`;