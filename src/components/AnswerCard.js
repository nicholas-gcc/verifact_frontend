import React from "react";
import { FiArrowUpRight } from 'react-icons/fi'
import styled from "styled-components";
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'

import { Text } from '../styles'

function AnswerCard(props) {
  const { answer,
    text,
    citationUrl,
    citationTitle,
    credibleCount,
    notCredibleCount } = props.answer
  const setColor = (answer === 'True') ? true : false;

  return <>
    <>
      <AnswerHeader children={answer} setColor={setColor} />
    </>
    <>
      <Text.Small>Asked by <b>DEMO</b> </Text.Small>
    </>
    <>
      <Text.Small children={text} />
    </>
    <MediaWrapper>
      <FiArrowUpRight />
      <MediaLink onClick={event => { event.stopPropagation(); }} href={citationUrl} >{citationUrl}</MediaLink>
      <MediaTitle>{citationTitle}</MediaTitle>
    </MediaWrapper>
    <ButtonWrapper>
      <VoteButton background={`background: #23BE7B;`}>
        {credibleCount} Credible
      </VoteButton>
      <VoteButton background={`background: #E55934;`}>
        {notCredibleCount} Not Credible
      </VoteButton>
    </ButtonWrapper>
  </>
}

const AnswerHeader = styled(Text.H2)`
  margin-bottom: 1rem;
  ${({ setColor }) => setColor ? `color: #23BE7B` : `color: #E55934`}
`

const MediaWrapper = styled.div`
  display: flex;
  overflow: hidden;
  text-overflow: ellipsis; 
`

const MediaLink = styled.a`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  font-weight: 700;
  color: #30323D;

  &:hover{
      text - decoration: none;
  }
`

const MediaTitle = styled(Text.Small)`
  font-size: 1.2rem;
  font-weight: 400;
  margin-left: 0.5rem;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`

const ButtonWrapper = styled.div`
  display: grid;
  grid-template-columns: 13rem 13rem;
  gap: 1rem;
`

const VoteButton = styled.button`
  border-radius: .5rem;
  border-style: none;
  width: 100%;
  color: white;
  background: #E55934;
  ${({ background }) => background}
`

export default createFragmentContainer(
  AnswerCard,
  {
    answer: graphql`
      fragment AnswerCard_answer on AnswerNode {
        answer
        text
        citationUrl
        citationTitle
        credibleCount
        notCredibleCount
      }
    `
  }
)