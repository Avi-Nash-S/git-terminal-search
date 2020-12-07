import React from "react";
import Terminal from "terminal-in-react";
import { SEARCH_GIT } from "../Queries/search.query";
import { client } from "../Client";

function LandingPage() {
  const search = (args, print, cmd) => {
    args._[0]
      ? client
          .query({
            query: SEARCH_GIT,
            variables: { searchQuery: args._[0] },
          })
          .then((res) =>
            res.data.search.edges.map((edge) => {
              print(`${edge.node.name}: ${edge.node.url}`);
              return null;
            })
          )
          .catch((err) => {
            console.log(err);
            print("Check log for more details...");
          })
      : print(args.search);
  };

  return (
    <Terminal
      commands={{
        search: {
          method: (args, print) => search(args, print),
          options: [
            {
              name: "search",
              defaultValue: "search <repo name> --required",
            },
          ],
        },
      }}
      descriptions={{
        search: "Search Through GIT <repo name> <without space>",
      }}
      msg="GIT Terminal for Repository Search"
    />
  );
}

export default LandingPage;
