import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "http://localhost:3002/",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
