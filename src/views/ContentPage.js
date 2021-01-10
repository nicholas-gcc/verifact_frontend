import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import graphql from 'babel-plugin-relay/macro'

import Query from '../components/Query'
import QuestionCard from "../components/QuestionCard";
import AnswerCard from "../components/AnswerCard";
import SubmitAnswerForm from "../components/SubmitAnswerForm";

const query = graphql`
  query ContentPageQuery ($question_id: ID!){
    question(id: $question_id) {
      id
      ...QuestionCard_question
      answers {
        edges {
          node {
            id
            ...AnswerCard_answer
          }
        }
      }
    }
  }
`

export default function ContentPage(props) {
  const question_id = props.match.params.id;
  const [showAnswerForm, setShowAnswerForm] = useState(false)

  return <Query
    query={query}
    variables={{ question_id }}
    render={({ error, props }) => {
      if (!props) {
        return <div>Loading...</div>
      } else if (error) {
        return <div>{error.message}</div>
      } else {
        return <Wrapper>
          <QuestionCard key={question_id} question={props.question} disableBtmBorader={true} visual />
          <HeaderWrapper enableForm={showAnswerForm}>
            {showAnswerForm ?
              (<>
                <FormWrapper >
                  <SubmitAnswerForm setVisual={() => setShowAnswerForm(false)} questionID={question_id} />
                </FormWrapper>
                <Title >All Answer</Title>
              </>) :
              (<>
                <Title >All Answer</Title>
                <CustomButton onClick={() => setShowAnswerForm(true)}>Answer the Question</CustomButton>
              </>)}
          </HeaderWrapper>
          {props.question.answers.edges.map(({ node }) => { return <AnswerWrapper><AnswerCard key={node.id} answer={node} visual={false} /></AnswerWrapper> })}
        </Wrapper>
      }
    }}
  />
}

const Wrapper = styled.div`
  padding: 0 16.6rem;

  @media (max-width: 767px) {
    padding: 0 2rem;
    margin: 0;
  }
`

const HeaderWrapper = styled.div`
  display: grid;
  margin-bottom: 3rem;
  grid-template-rows: auto auto;

  ${({ enableForm }) => enableForm ? null : `
    grid-template-columns: auto auto;
  `}
`

const FormWrapper = styled.div`
  display: grid;
  justify-items: center;
  margin-bottom: 6rem;
`

const Title = styled.h1`
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 700;
`

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
`

const AnswerWrapper = styled.div`
  display: grid;
  background: #EEF0F2;
  padding: 1.5rem 3rem;
  margin: 3rem 0;
  border-radius: 2rem;
  word-wrap: break-word;
  word-break: break-all;
`
