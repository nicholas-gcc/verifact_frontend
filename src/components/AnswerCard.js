import React from "react";
import { FiArrowUpRight } from 'react-icons/fi'
import styled from "styled-components";
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'

import { Text } from '../styles'

function AnswerCard({ answer_obj }) {
  const {
    id,
    answer,
    text,
    citationUrl,
    citationTitle,
    credibleCount,
    notCredibleCount
  } = answer_obj
  const setColor = (answer === 'True');

  return <div key={id}>
    <AnswerHeader children={answer} setColor={setColor} />
    <Text.Small>Answered by <b>DEMO</b> </Text.Small>
    <Text.Small children={text} />
    <MediaWrap>
      <FiArrowUpRight />
      <MediaLink onClick={event => { event.stopPropagation(); }} href={citationUrl} >{citationUrl}</MediaLink>
      <MediaTitle>{citationTitle}</MediaTitle>
    </MediaWrap>
    <ButtonWrap>
      <VoteButton background={'green'}>
        <VoteButtonInnerWrap>
          <Text.SmallStrong children={credibleCount} />
          Credible
        </VoteButtonInnerWrap>
      </VoteButton>
      <VoteButton background={'red'}>
        <VoteButtonInnerWrap>
          <Text.SmallStrong children={notCredibleCount} />
          Not Credible
        </VoteButtonInnerWrap>
      </VoteButton>
    </ButtonWrap>
  </div>
}



const AnswerHeader = styled(Text.H2)`
  margin-bottom: 1rem;
  text-transform: uppercase;
  ${({ setColor }) => setColor ? `color: var(--Green)` : `color: var(--Red)`}
`

const MediaWrap = styled.div`
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
  color: var(--TextPrimary);

  &:hover{
    color: var(--TextPrimary);
    text-decoration: none;
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

const ButtonWrap = styled.div`
  display: flex;
  gap: 1rem;
`

const VoteButtonInnerWrap = styled.div`
  display: flex;
  gap: 0.3rem;
`

const VoteButton = styled.button`
  border-radius: .5rem;
  padding: 0.3rem 0.9rem;
  border-style: none;
  color: white;
  font-size: 1.4rem;
  ${({ background }) => (background === 'green') ? `background: var(--Green)` : `background : var(--Red)`}
`

export default createFragmentContainer(
  AnswerCard,
  {
    answer_obj: graphql`
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