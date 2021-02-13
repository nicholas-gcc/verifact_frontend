import React from "react";
import { FiArrowUpRight } from 'react-icons/fi'
import styled from "styled-components";
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'

import { Text } from '../styles'

function AnswerCard(props) {
  const { id,
    answer,
    text,
    citationUrl,
    citationTitle,
    credibleCount,
    notCredibleCount } = props.answer
  const setColor = (answer === 'True') ? true : false;

  return <div key={id}>
    <>
      <AnswerHeader children={answer} setColor={setColor} />
    </>
    <>
      <Text.Small>Answered by <b>DEMO</b> </Text.Small>
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
        <VoteButtonInnerWrapper>
          <Text.SmallStrong children={credibleCount} />
          Credible
        </VoteButtonInnerWrapper>
      </VoteButton>
      <VoteButton background={`background: #E55934;`}>
        <VoteButtonInnerWrapper>
          <Text.SmallStrong children={notCredibleCount} />
          Not Credible
        </VoteButtonInnerWrapper>
      </VoteButton>
    </ButtonWrapper>
  </div>
}



const AnswerHeader = styled(Text.H2)`
  margin-bottom: 1rem;
  text-transform: uppercase;
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
  display: flex;
  gap: 1rem;
`

const VoteButtonInnerWrapper = styled.div`
  display: flex;
  gap: 0.3rem;
`

const VoteButton = styled.button`
  border-radius: .5rem;
  padding: 0.3rem 0.9rem;
  border-style: none;
  color: white;
  background: #E55934;
  font-size: 1.4rem;
  ${({ background }) => background}
`

export default createFragmentContainer(
  AnswerCard,
  {
    answer: graphql`
      fragment AnswerCard_answer on AnswerNode {
        id
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