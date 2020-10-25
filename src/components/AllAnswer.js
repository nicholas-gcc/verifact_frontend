import React, { useState, useEffect } from "react";
import AnswerCard from "./AnswerCard";
import { Button } from "react-bootstrap";
import styled from "styled-components";
import SubmitAnswerForm from "./SubmitAnswerForm";

const getAllAnswersIdByQuestionId = (question_id) => {
  /* TODO get AnswerId tho API, 
  Expected return from API, Eg. [1,23,38,98] */
  return [1, 23, 38, 98]
}

export default function AllAnswer(props) {
  const { question_id } = props
  const [answersId, setAnswersId] = useState([])
  const [visual, setVisual] = useState(false)

  useEffect(() => {
    setAnswersId(getAllAnswersIdByQuestionId(question_id))
  }, [question_id]);

  const handleOnClick = () => {
    console.log(visual)
    setVisual(!visual)
  }

  return <ContentWrapper>
    {visual ?
      (<div>
        <Wrapper style={{ gridTemplateRows: "auto auto" }}>
          <div style={{ display: 'grid', justifyItems: 'center', marginBottom: "30px" }}>
            <SubmitAnswerForm />
          </div>
          <p style={{ fontWeight: 'bold', fontSize: '32px', margin: '0px' }}>All Answer</p>
        </Wrapper>
        {answersId.map((answer_id, i) => { return <AnswerCard key={answer_id} answer_id={answer_id} visual={false} /> })}
      </div>) :
      (<div>
        <Wrapper style={{ gridTemplateColumns: "auto auto" }}>
          <p style={{ fontWeight: 'bold', fontSize: '32px', margin: '0px' }}>All Answer</p>
          <Button variant="warning" className="ml-auto" onClick={handleOnClick}>Answer the Question</Button>
        </Wrapper>
        <div>
          {answersId.map((answer_id) => { return <AnswerCard key={answer_id} answer_id={answer_id} visual={false} /> })}
        </div>
      </div>)}
  </ContentWrapper>
}

const Wrapper = styled.div`
  display: grid;
  margin: 30px 0;
`;

const ContentWrapper = styled.div`
  display: grid;
`;

