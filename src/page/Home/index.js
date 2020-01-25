import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { GET_POKEMONS } from "../../query";

export default function Home() {
  const [variables, setVariables] = React.useState({ first: 20 });
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables
  });

  const handleFetch = () =>
    fetchMore({
      variables: { ...variables, first: variables.first + 6 },
      updateQuery: (prev, { fetchMoreResult, variables }) => {
        setVariables(variables);
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          pokemons: [...fetchMoreResult.pokemons]
        });
      }
    });

  if (error) return <p>WOW ERROR</p>;

  const pokemonExists = data && data.pokemons;

  return (
    <>
      <h1>HOME</h1>
      {pokemonExists &&
        data.pokemons.map(pokemon => (
          <div key={pokemon.id} style={{ padding: 8, marginTop: 16 }}>
            {JSON.stringify(pokemon)}
            <br />
            <Link to={`detail/${pokemon.id}/${pokemon.name}`}>more...</Link>
          </div>
        ))}

      <button onClick={handleFetch}>
        <h1>{loading ? "LOADING" : "SHOW MORE"}</h1>
      </button>
    </>
  );
}
