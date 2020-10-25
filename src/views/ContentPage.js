import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import AllAnswer from "../components/AllAnswer"
import QuestionCard from "../components/QuestionCard";

export default function ContentPage(props) {
  const question_id = props.match.params.id;

  return <Wrapper>
    <QuestionCard question_id={question_id} />
    <AllAnswer question_id={question_id} />
  </Wrapper>;
}

const Wrapper = styled(Container)`
  display: grid;
  padding: 20px 0px;
`;