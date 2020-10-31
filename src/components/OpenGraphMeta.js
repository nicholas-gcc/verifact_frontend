import React, { useState, useEffect } from "react";
import { Image } from "react-bootstrap";
import { FiArrowUpRight } from "react-icons/fi";
import styled from "styled-components";

const URL = require('url');

const getHostname = (url) => {
  return URL.parse(url).hostname;
}

export default function OpenGraphMeta(props) {
  const { media_url, media_title, media_image } = props;
  const [hostname, setHostname] = useState("")

  useEffect(() => {
    setHostname(getHostname(media_url))
  }, [media_url, hostname]);

  return (
    <Wrapper>
      <div>
        <CustomImage src={media_image} thumbnail />
      </div>
      <ContentWrapper>
        <ExternalLinkWrapper>
          <FiArrowUpRight />
          <CustomLink onClick={event => { event.stopPropagation(); }} href={"https://" + hostname} >{hostname}</CustomLink>
        </ExternalLinkWrapper>
        <TitleWrapper>
          {media_title}
        </TitleWrapper>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 100px auto;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
  padding-left: 10px;
`;

const ExternalLinkWrapper = styled.div`
  display: grid;
  overflow: auto;
  grid-template-columns: 20px auto;
  align-items: center;
`;

const CustomImage = styled(Image)`
  padding: 0;
  border-style: none;
  width: 100%;
  height: 56.25px;
`;

const CustomLink = styled.a`
  font-size: 10px;
  color: #30323D;
  &:hover{
    color: #30323D;
    text-decoration: none;
  }
`;

const TitleWrapper = styled.div`
  overflow: auto;
  line-height: 19.09px;
`;