import axios from 'axios'
import ApolloClient from 'apollo-boost'

export const restApi = axios.create({
  baseURL: `${process.env.REACT_APP_API_REST_HOST}:${process.env.REACT_APP_API_REST_PORT}`,
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
  }
})

function fetchGraphqlApi(rawBody) {
  return fetch(`${process.env.REACT_APP_API_GRAPHQL_HOST}:${process.env.REACT_APP_API_GRAPHQL_PORT}`, {
    method: 'post',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ query: rawBody })
  })
}

export const graphqlApi = ({
  query: (query) => {
    return fetchGraphqlApi(`query { ${query} }`)
  },
  mutation: (mutation) => {
    return fetchGraphqlApi(`mutation { ${mutation} }`)
  }
})

export const apolloClient = new ApolloClient({
  uri: `${process.env.REACT_APP_API_GRAPHQL_HOST}:${process.env.REACT_APP_API_GRAPHQL_PORT}`
})
