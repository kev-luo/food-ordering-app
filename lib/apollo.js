import { withApollo } from "next-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337/graphql",
    credentials: "same-origin",
  }),
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);