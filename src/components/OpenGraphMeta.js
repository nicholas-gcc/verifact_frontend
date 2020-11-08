import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { FiArrowUpRight } from "react-icons/fi";
import styled from "styled-components";

const URL = require('url');

const getHostname = (url) => {
  return URL.parse(url).hostname;
}

export default function OpenGraphMeta(props) {
  const { mediaUrl, mediaTitle, mediaImage } = props;
  const [hostname, setHostname] = useState("")

  useEffect(() => {
    setHostname(getHostname(mediaUrl))
  }, [mediaUrl, hostname]);

  return (
    <Wrapper>
      <div>
        <CustomImage src={mediaImage} thumbnail />
      </div>
      <ContentWrapper>
        <ExternalLinkWrapper>
          <FiArrowUpRight />
          <CustomLink onClick={event => { event.stopPropagation(); }} href={mediaUrl} >{hostname}</CustomLink>
        </ExternalLinkWrapper>
        <TitleWrapper>
          {mediaTitle}
        </TitleWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 10rem auto;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  padding-left: 1rem;
`;

const ExternalLinkWrapper = styled.div`
  display: grid;
  grid-template-columns: 2rem auto;
  align-items: center;
`;

const CustomImage = styled(Image)`
  padding: 0;
  border-style: none;
  width: 100%;
  height: 5.625rem;
`;

const CustomLink = styled.a`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  color: #30323D;
  &:hover{
    color: #30323D;
    text-decoration: none;
  }
`;

const TitleWrapper = styled.div`
  font-size: 1.6rem;
  line-height: 1.9rem;
  color: #30323D;
`;