import {
  Environment,
  Network,
  RecordSource,
  Store
} from 'relay-runtime'

const API_HOST = process.env.REACT_APP_API_HOST || 'http://127.0.0.1:8000'

const fetchQuery = async (operation, variables) => {
  return fetch(API_HOST + '/graphql', {
    method: 'POST',
    body: JSON.stringify({
      query: operation.text,
      variables
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }).then(response => {
    return response.json()
  })
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource())
})

export default environment
