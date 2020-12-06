import React, { useState } from "react";
import { Container, Button } from "react-bootstrap";
import styled from "styled-components";
import graphql from 'babel-plugin-relay/macro'

import Query from '../components/Query'
import QuestionCard from "../components/QuestionCard";
import AnswerCard from "../components/AnswerCard";
import SubmitAnswerForm from "../components/SubmitAnswerForm";


// const getAllAnswersIdByQuestionId = (question_id) => {
//   /* TODO get AnswerId tho API, 
//   Expected return from API, Eg. [1,23,38,98] */
//   return [1, 23, 38, 98]
// }

export default function ContentPage(props) {
  const question_id = props.match.params.id;

  const [visual, setVisual] = useState(false)
  console.log(question_id)
  const query = graphql`
  query ContentPageQuery ($question_id: ID!){
    question(id: $question_id) {
      id
      ...QuestionCard_question
      answers {
        edges {
          node {
            id
            createdAt
            answer
            text
            citationUrl
            citationTitle
            credibleCount
            notCredibleCount
          }
        }
      }
    }
  }
  `

  const handleOnClick = () => {
    console.log(visual)
    setVisual(!visual)
  }

  return <Query
    query={query}
    variables={{ question_id }}
    render={({ error, props }) => {
      if (!props) {
        return <div>Loading...</div>
      } else if (error) {
        return <div>{error.message}</div>
      } else {
        console.log(props.question)
        return <Wrapper>
          <QuestionCard key={question_id} question={props.question} visual />
          <ContentWrapper>
            {visual ?
              (<div>
                <HeaderWrapper1>
                  <FormWrapper >
                    <SubmitAnswerForm setVisual={setVisual} />
                  </FormWrapper>
                  <Title >All Answer</Title>
                </HeaderWrapper1>
                {props.question.answers.edges.map((node, i) => { return <AnswerWrapper><AnswerCard key={node.id} answer_id={node.id} visual={false} /> </AnswerWrapper> })}
              </div>) :
              (<div>
                <HeaderWrapper2>
                  <Title >All Answer</Title>
                  <CustomButton onClick={handleOnClick}>Answer the Question</CustomButton>
                </HeaderWrapper2>
                {props.question.answers.edges.map((node) => { return <AnswerWrapper><AnswerCard key={node.id} answer_id={node.id} visual={false} /></AnswerWrapper> })}
              </div>)}
          </ContentWrapper>
        </Wrapper>
      }
    }}
  />
}

const Wrapper = styled(Container)`
  display: grid;
  padding: 20px 0px;
`;

const HeaderWrapper1 = styled.div`
  display: grid;
  margin-top: 6rem;
  margin-bottom: 3rem;
  grid-template-rows: auto auto;
`;

const HeaderWrapper2 = styled.div`
  display: grid;
  margin-top: 6rem;
  margin-bottom: 3rem;
  grid-template-columns: auto auto;
`;

const FormWrapper = styled.div`
  display: grid;
  justify-items: center;
  margin-bottom: 6rem;
`;

const ContentWrapper = styled.div`
  display: grid;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 3.2rem;
  margin: 0;
`;

const CustomButton = styled(Button)`
  background-color: #FFB800;
  color: #30323D;
  border: none;
  border-radius: 1rem;
  padding: 1rem 1.5rem;
  transition-duration: 0.4s;
  font-weight: bold;
  font-size: 1.6rem;
  width: 20rem;
  justify-self: end;

  &:hover{
    background-color: #FFB800;
    color: #30323D;
  }
`;

const AnswerWrapper = styled.div`
  display: grid;
  background: #EEF0F2;
  padding: 1.5rem 3rem;
  margin: 3rem 0;
  border-radius: 2rem;
`;
