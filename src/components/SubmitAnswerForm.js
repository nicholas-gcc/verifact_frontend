import React, { useState } from "react";
import { Form } from "react-bootstrap";
import styled from "styled-components";

export default function SubmitAnswerForm(props) {
    const { setVisual } = props
    const { ArticleLink, setArticleLink } = useState("")
    const { Statement, setStatement } = useState("")

    return <Wrapper>
        <div>
            <Title>Answer the Question</Title>
        </div>
        <CustomForm>
            <div>
                <Form.Group>
                    <Form.Check
                        defaultChecked
                        inline
                        type="radio"
                        label="True"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios1"
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="False"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios2"
                    />
                    <Form.Check
                        inline
                        type="radio"
                        label="Uncertain"
                        name="formHorizontalRadios"
                        id="formHorizontalRadios3"
                    />
                </Form.Group>
            </div>
            <div>
                <FormWrapper controlId="formGroupNewsURL" >
                    <FormLabel>Explain your answer</FormLabel>
                    <FormInput1 onChange={(e) => setArticleLink(e.target.value)} as="textarea" placeholder="For example x, y and z" required />
                </FormWrapper>
            </div>
            <div>
                <FormWrapper controlId="formGroupQuestion">
                    <FormLabel>Citation (News URL)</FormLabel>
                    <FormInput2 onChange={(e) => setStatement(e.target.value)} type="text" placeholder="https://example.com/article" required />
                </FormWrapper>
            </div>

            <ButtonWrapper>
                <CustomButton type="button" onClick={() => setVisual(false)}>
                    Cancle
                </CustomButton>
                {/* <CustomButton type="submit">
                    Add Citation
                </CustomButton> */}
                <SubmitButton type="submit">
                    Submit Answer
                </SubmitButton>
            </ButtonWrapper>
        </CustomForm>
    </Wrapper>
}

const Wrapper = styled.div`
    background: #EEF0F2;
    width: 55rem;
    border-radius: 2.5rem;
    display: grid;
    row-gap: 3rem;
    padding: 5rem;
`;

const CustomForm = styled(Form)`
    display: grid;
    row-gap: 3rem;
`;

const Title = styled.h1`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 3.2rem;
    line-height: 3.8rem;
`;

const CustomButton = styled.button`
    background: none;
    border-radius: 1rem;
    border-style: none;
    height: 3.9rem;

    font-family: SF Pro Text;
    font-size: 1.4rem;

    font-weight: 700;
    line-height: 1.7rem;
    letter-spacing: 0;
`;

const SubmitButton = styled.button`
    background: #FFB800;
    border-radius: 1rem;
    border-style: none;
    height: 3.9rem;

    font-family: SF Pro Text;
    font-size: 1.4rem;

    font-weight: 700;
    line-height: 1.7rem;
    letter-spacing: 0;
    padding: 1rem 1.5rem;
`;

const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3,auto);
    column-gap: 1rem;
    justify-content: end; 
`;

const FormWrapper = styled.div`
  display: grid;
  grid-template-rows: auto;
`;

const FormLabel = styled.h1`
  font-weight: bold;
  font-size: 1.6rem;
  font-family: Open Sans;
  margin-bottom: .5rem;
`;

const FormInput1 = styled.input`
  height: 12.8rem;
  font-family: Open Sans;
`;

const FormInput2 = styled.input`
  height: 5rem;
`;