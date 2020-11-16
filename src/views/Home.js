import React from 'react'
import styled from 'styled-components'
import graphql from 'babel-plugin-relay/macro'

import Query from '../components/Query'
import QuestionCard from '../components/QuestionCard'
import Hero from '../components/Hero'

const query = graphql`
  query HomeQuery {
    questions {
      edges {
        node {
          id
        }
      }
    }
  }
`

const ContentWrapper = styled.div`
  padding: 0 16.6rem;

  @media (max-width: 767px) {
    padding: 0 2rem;
    margin: 0;
  }
`

const Wrapper = styled.div`
  border-bottom: 1px solid #6C718A;
  padding: 6rem 0;

  @media only screen and (max-width: 767px){
    padding: 0;
    margin: 0;
  }
`

function Home (props) {
  const listQuestionId = ['1', '2']

  return <div>
    <Hero />
    <ContentWrapper>
      <Query
        query={query}
        render={({error, props}) => {
          if (!props) {
            return <div>Loading...</div>
          } else if (error) {
            return <div>{error.message}</div>
          } else {
            console.log(props)
            return <div>rendered!</div>
          }
        }}
      />
      {listQuestionId.map((questionId) =>
        <Wrapper key={questionId}>
          <QuestionCard id={questionId} questionId={questionId} visual />
        </Wrapper>
      )}
    </ContentWrapper>
  </div>
}

export default Home
