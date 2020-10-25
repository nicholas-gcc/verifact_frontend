import React from "react";
import { Button, Form } from "react-bootstrap";
import styled from "styled-components";


export default function SubmitAnswerForm(props) {

    return <Wrapper>

        <CustomForm style={{ padding: '8%' }}>
            <div>
                <Title>Answer the Question</Title>
            </div>
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
                <Form.Group controlId="formTextareaExplain">
                    <Form.Label>Explain your answer</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="For example x, y and z" />
                </Form.Group>
            </div>
            <div>
                <Form.Group controlId="formTextareaLink">
                    <Form.Label>Citation (News URL)</Form.Label>
                    <Form.Control as="textarea" rows="3" placeholder="https://example.com/article" />
                </Form.Group>
            </div>
            <ButtonWrapper>
                <ButtonStyled variant="light" type="submit" >
                    Cancle
                </ButtonStyled>
                <ButtonStyled variant="light" type="submit">
                    Add Citation
                </ButtonStyled>
                <Button variant="warning" type="submit">
                    Submit Answer
                </Button>
            </ButtonWrapper>
        </CustomForm>
    </Wrapper>
}

const Title = styled.h1`
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: bold;
    font-size: 32px;
    line-height: 38px;
`;

const ButtonStyled = styled(Button)`
    background: none;
    border-style: none;
`;

const Wrapper = styled.div`
    background: #EEF0F2;
    width:60%;
    border-radius: 25px;
`;

const ButtonWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3,auto);
    column-gap: 10px;
    justify-content: end; 
`;

const CustomForm = styled(Form)`
    padding: '8%';
    display: grid;
    row-gap: 30px;
`;