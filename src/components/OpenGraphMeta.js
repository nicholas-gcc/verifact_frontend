import React from "react";
import { Image } from "react-bootstrap";
import { FiExternalLink } from "react-icons/fi";
import styled from "styled-components";

export default function OpenGraphMeta(props) {
  const { media_url, media_title, media_image } = props;
  return (
    <Wrapper>
      <div>
        <CustomeImage src={media_image} thumbnail />
      </div>
      <ContentWrapper style={{ paddingLeft: "10px" }}>
        <ExternalLinkWrapper>
          <FiExternalLink />
          <a onClick={event => { event.stopPropagation(); }} href={media_url} >{media_url}</a>
        </ExternalLinkWrapper>
        <div style={{ overflow: "auto" }}>
          {media_title}
        </div>
      </ContentWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 150px auto;
`;

const ContentWrapper = styled.div`
  display: grid;
  grid-template-rows: auto auto;
`;

const ExternalLinkWrapper = styled.div`
  display: grid;
  overflow: auto;
  grid-template-columns: 20px auto;
  align-items: center;
`;

const CustomeImage = styled(Image)`
border-style: none;
`;