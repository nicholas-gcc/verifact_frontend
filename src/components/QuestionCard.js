import React from 'react'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { monthDayYear } from '../utils/datetime'
import OpenGraphMeta from './OpenGraphMeta'
import QuestionCardAnswersCount from './QuestionCardAnswersCount'

const Wrap = styled.div`
  border-bottom: 1px solid #6C718A;
  padding: 6rem 0;
  display: grid;
  cursor: pointer;

  @media only screen and (max-width: 767px){
    padding: 0;
    margin: 0;
  }
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

function QuestionCard ({ question }) {
  const history = useHistory()

  const {
    id,
    createdAt,
    text,
    citationUrl,
    citationTitle,
    citationImageUrl
  } = question
  const dt = new Date(createdAt)
  const formattedCreatedAt = monthDayYear.format(dt)

  return (
    <Wrap onClick={() => history.push(`/question/${id}`)}>
      <Title>{text}</Title>
      <QuestionCardAnswersCount question={question} />
      <InnerWrapper>
        <OpenGraphMeta
          mediaUrl={citationUrl}
          mediaTitle={citationTitle}
          mediaImage={citationImageUrl}
        />
      </InnerWrapper>
      <Text>Asked on {formattedCreatedAt}</Text>
    </Wrap>
  )
}

export default createFragmentContainer(
  QuestionCard,
  {
    question: graphql`
      fragment QuestionCard_question on QuestionNode {
        id
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
