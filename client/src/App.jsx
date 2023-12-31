import { ApolloClient, InMemoryCache, ApolloProvider, useQuery } from '@apollo/client'
import DisplayData from './DisplayData.jsx'

function App() {

  const client = new ApolloClient({
    uri: 'http://localhost:4000/graphql',
    cache: new InMemoryCache(),
  })
  
  return (
    <ApolloProvider client={client}>
      
        <DisplayData />
      
    </ApolloProvider>
  )
}

export default App
