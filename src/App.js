import classes from "./App.module.css";
import { client } from "./Client";
import LandingPage from "./Components/LandingPage";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <div className={classes.App}>
        <LandingPage />
      </div>
    </ApolloProvider>
  );
}

export default App;
