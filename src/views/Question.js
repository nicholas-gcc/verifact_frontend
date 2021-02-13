import React, { useState } from "react";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import graphql from 'babel-plugin-relay/macro'

import Query from '../components/Query'
import QuestionCard from "../components/QuestionCard";
import SubmitAnswerForm from "../components/SubmitAnswerForm";
import AnswerCard from "../components/AnswerCard";
import { Text } from '../styles'

const query = graphql`
  query QuestionQuery ($question_id: ID!){
    node(id: $question_id) {
      ...QuestionCard_question
      ...on QuestionNode {
        answers { edges { node { id ...AnswerCard_answer}}}
      }
    }
  }
`

export default function Question(props) {
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
          <QuestionCard key={question_id} question={props.node} disableBtmBorader={true} visual />
          <HeaderWrapper enableForm={showAnswerForm}>
            {showAnswerForm ?
              (<>
                <FormWrapper >
                  <SubmitAnswerForm setVisual={() => setShowAnswerForm(false)} questionID={question_id} />
                </FormWrapper>
                <H2TextNoMargin children="All Answer" />
              </>) :
              (<>
                <H1TextNoMargin children="All Answer" />
                <CustomButton onClick={() => setShowAnswerForm(true)}>Answer the Question</CustomButton>
              </>)}
          </HeaderWrapper>
          {props.node.answers.edges.map(({ node }) => { return <AnswerWrapper key={node.id} ><AnswerCard answer={node} visual={false} /></AnswerWrapper> })}
        </Wrapper>
      }
    }}
  />
}

const H2TextNoMargin = styled(Text.H2)`
  margin: 0;
`

const H1TextNoMargin = styled(Text.H1)`
  margin: auto 0;
`

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
            background - color: #FFB800;
    color: #30323D;
  }
`

const AnswerWrapper = styled.div`
  display: grid;
  background: #EEF0F2;
  padding: 2rem 2rem 2.386rem 2rem;
  margin: 3rem 0;
  border-radius: 2rem;
  word-wrap: break-word;
  word-break: break-all;
`