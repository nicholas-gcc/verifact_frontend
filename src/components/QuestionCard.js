import React from 'react'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import OpenGraphMeta from './OpenGraphMeta'
import QuestionCardAnswersCount from './QuestionCardAnswersCount'

const Wrap = styled.div`
  border-bottom: 1px solid #6C718A;
  padding: 6rem 0;

  @media only screen and (max-width: 767px){
    padding: 0;
    margin: 0;
  }
`

const GridWrap = styled.div`
  display: grid;
  cursor: pointer;
`

const InnerWrapper = styled.div`
  margin-bottom: 2rem;
`

const Title = styled.h1`
  color: #30323D;
  font-size: 2.1rem;
  font-weight: bold;
  margin-bottom: 2rem;
`

const Text = styled.p`
  color: #30323D;
  font-size: 1.4rem;
`

const handleClick = (history, question_id) => {
  history.push('/question/' + question_id)
}

function QuestionCard ({ question }) {
  const {
    createdAt,
    text,
    citationUrl,
    citationTitle,
    citationImageUrl,
  } = question

  // <div onClick={() => handleClick(history)} style={{ cursor: 'pointer' }}>
  return (
    <Wrap>
      <GridWrap>
        <Title>{text}</Title>
        <QuestionCardAnswersCount question={question} />
        <InnerWrapper>
          <OpenGraphMeta
            mediaUrl={citationUrl}
            mediaTitle={citationTitle}
            mediaImage={citationImageUrl}
          />
        </InnerWrapper>
        <Text>Asked on {createdAt}</Text>
      </GridWrap>
    </Wrap>
  )
}

export default createFragmentContainer(
  QuestionCard,
  {
    question: graphql`
      fragment QuestionCard_question on QuestionNode {
        createdAt
        text
        citationUrl
        citationTitle
        citationImageUrl
        ...QuestionCardAnswersCount_question
      }
    `
  }
)
