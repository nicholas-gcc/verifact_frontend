import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";
import { graphql } from 'babel-plugin-relay/macro'
import { commitMutation } from 'react-relay'

import environment from '../config/relay'

const mutation = graphql`
    mutation SubmitAnswerFormMutation($input: AnswerCreateInput!){
        answerCreate(input: $input){
            answer{
                id
                answer
            }
        }
    }`

export default function SubmitAnswerForm(props) {
    const { setVisual, questionID } = props;
    const [answer, setAnswer] = useState("True");
    const [articleLink, setArticleLink] = useState("");
    const [statement, setStatement] = useState("");

    const handleSubmit = () => {
        const variables = {
            "input": {
                "answer": answer,
                "text": statement,
                "citationUrl": articleLink,
                "citationTitle": "Hello world ctitle2",
                "questionId": questionID
            }
        }
        commitMutation(environment, {
            mutation, variables
        },
        );
    }

    return <MainWrapper>
        <>
            <Title>Answer the Question</Title>
        </>
        <CustomForm id="answerForm" onSubmit={handleSubmit}>
            <FormWrapper>
                <Form.Group>
                    <Form.Check
                        defaultChecked
                        inline
                        type="radio"
                        label="True"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                        onClick={() => setAnswer("True")}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="False"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                        onClick={() => setAnswer("False")}
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Uncertain"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                        onClick={() => setAnswer("Uncertain")}
                    />
                </Form.Group>
            </FormWrapper>
            <FormWrapper>
                <FormLabel>Explain your answer</FormLabel>
                <FormInput height={'height: 12.8rem;'} onChange={(e) => setStatement(e.target.value)} as="textarea" placeholder="For example x, y and z" required />
            </FormWrapper>
            <FormWrapper>
                <FormLabel>Citation (News URL)</FormLabel>
                <FormInput height={'height: 5rem;'} onChange={(e) => setArticleLink(e.target.value)} type="text" placeholder="https://example.com/article" required />
            </FormWrapper>
            <ButtonWrapper>
                <Button background={'background: none;'} type="button" onClick={() => setVisual(false)}>
                    Cancle
                </Button>
                <Button background={'background: #FFB800;'} type="submit" form="answerForm">
                    Submit Answer
                </Button>
            </ButtonWrapper>
        </CustomForm>
    </MainWrapper>
}

const MainWrapper = styled.div`
    display: grid;
    width: 55rem;
    row-gap: 3rem;
    padding: 5rem;
    background: #EEF0F2;
    border-radius: 2rem;
`

const CustomForm = styled(Form)`
    display: grid;
    row-gap: 3rem;
`

const Title = styled.h1`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 3.2rem;
    line-height: 3.8rem;
`

const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3,auto);
    column-gap: 1rem;
    justify-content: end; 
`

const Button = styled.button`
    background: none;
    border-radius: 1rem;
    border-style: none;
    height: 3.9rem;

    font-family: SF Pro Text;
    font-size: 1.4rem;

    font-weight: 700;
    line-height: 1.7rem;
    letter-spacing: 0;
    padding: 1rem 1.5rem;

    ${({ background }) => background}
`

const FormWrapper = styled.div`
  display: grid;
`

const FormLabel = styled.h1`
  font-weight: 600;
  font-size: 1.6rem;
  font-family: Open Sans;
`

const FormInput = styled.input`
  font-family: Open Sans;
  border-radius: 1rem;

  ${({ height }) => height}
`