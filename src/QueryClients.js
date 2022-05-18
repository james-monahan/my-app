import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

export const hoprClient = new ApolloClient({
    uri: 'https://api.thegraph.com/subgraphs/name/minatofund/hopr-subgraph-mainnet',
    cache: new InMemoryCache()
})