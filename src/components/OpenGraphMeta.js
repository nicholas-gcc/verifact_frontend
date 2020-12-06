import React from 'react'
import { Image } from 'react-bootstrap'
import { FiArrowUpRight } from 'react-icons/fi'
import styled from 'styled-components'
import url from 'url'

const Wrap = styled.div`
  display: grid;
  grid-template-columns: 10rem auto;
  margin-bottom: 2rem;
`

const Content = styled.div`
  padding-left: 1rem;
`

const MediaImage = styled(Image)`
  width: 10rem;
  height: 5.625rem;
  border: none;
`

const MediaLink = styled.a`
  margin-left: 0.5rem;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 1rem;
  color: #30323D;

  &:hover{
    color: #30323D;
    text-decoration: none;
  }
`

export default function OpenGraphMeta ({ mediaUrl, mediaTitle, mediaImage }) {
  const mediaHostname = url.parse(mediaUrl).hostname

  return (
    <Wrap>
      <MediaImage src={mediaImage} thumbnail />

      <Content>
        <div>
          <FiArrowUpRight />
          <MediaLink
            href={mediaUrl}
            onClick={e => { e.stopPropagation() }}
            children={mediaHostname}
          />
        </div>
        {mediaTitle}
      </Content>
    </Wrap>
  )
}
