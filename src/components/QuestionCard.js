import React from 'react'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import styled from 'styled-components'
import { useHistory } from 'react-router-dom'

import { Text } from '../styles'
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
      <Text.H2 children={text} />
      <QuestionCardAnswersCount question={question} />
      <OpenGraphMeta
        mediaUrl={citationUrl}
        mediaTitle={citationTitle}
        mediaImage={citationImageUrl}
      />
      <Text.Small children={`Asked on ${formattedCreatedAt}`} />
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
