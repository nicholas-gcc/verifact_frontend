import React from 'react'
import { QueryRenderer } from 'react-relay'

import environment from '../config/relay'

function Query ({ query, variables, render }) {
  return (
    <QueryRenderer
      environment={environment}
      query={query}
      variables={variables}
      render={render}
    />
  )
}

export default Query
