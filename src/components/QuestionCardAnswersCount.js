import React from 'react'
import graphql from 'babel-plugin-relay/macro'
import { createFragmentContainer } from 'react-relay'
import styled from 'styled-components'

const Text = styled.p`
  font-size: 1.4rem;
  font-weight: 700;
  margin-bottom: 2rem;
`

function QuestionCardAnswersCount ({ question }) {
  const answers = question.answers.edges

  let trueAnswers = 0
  let falseAnswers = 0
  let neitherAnswers = 0
  answers.forEach(({ node }) => {
    switch (node.answer) {
      case 'True':
        trueAnswers++
        break
      case 'False':
        falseAnswers++
        break
      case 'Neither':
        neitherAnswers++
        break
      default:
        break
    }
  })

  if (answers.length <= 0) return null

  return (
    <Text>
      {answers.length} answers
      ({trueAnswers > 0 && `${trueAnswers} true`}
      {falseAnswers > 0 && `, ${falseAnswers} false`}
      {neitherAnswers > 0 && `, ${neitherAnswers} neither`})
    </Text>
  )
}

export default createFragmentContainer(
  QuestionCardAnswersCount,
  {
    question: graphql`
      fragment QuestionCardAnswersCount_question on QuestionNode {
        answers {
          edges {
            node {
              answer
            }
          }
        }
      }
    `
  }
)
