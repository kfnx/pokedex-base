import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { GET_POKEMONS } from "../../query";

export default function Home() {
  const size = window && window.innerWidth < 960 ? "small" : "large";
  const { filter } = useParams();
  const [variables, setVariables] = React.useState({ first: 21 });
  const { loading, error, data, fetchMore } = useQuery(GET_POKEMONS, {
    variables
  });

  const handleScroll = React.useCallback(() => {
    const scrollTop = document.documentElement.scrollTop;
    const offsetHeight = document.documentElement.offsetHeight;

    if (window.innerHeight + scrollTop + 2 < offsetHeight) return;

    fetchMore({
      variables: {
        ...variables,
        first: filter ? variables.first + 27 : variables.first + 12
      },
      updateQuery: (prev, { fetchMoreResult, variables }) => {
        setVariables(variables);
        if (!fetchMoreResult) return prev;
        return Object.assign({}, prev, {
          pokemons: [...fetchMoreResult.pokemons]
        });
      }
    });
  }, [fetchMore, variables]);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  if (error) return <p>SOMETHING HAPPEN, ERROR</p>;

  const pokemonFetched = data ? data.pokemons : [];

  return (
    <>
      <ListPokemons pokemons={pokemonFetched} filter={filter} size={size} />
      {loading ? (
        <center>
          <h1>LOADING</h1>
        </center>
      ) : (
        <center>
          <h1> </h1>
        </center>
      )}
    </>
  );
}

const CardListContainer = styled.div`
  max-width: 930px;
  justify-content: space-around;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: stretch;
  flex-wrap: wrap;
  text-align: center;
  width: ${props => (props.size === "small" ? "80%" : "230px")};
  padding: 16px;
  margin: 16px;
  border: 2px solid seagreen;
  border-radius: 8px;
  color: black;
  text-decoration: none;
`;

const Name = styled.p`
  font-weight: bold;
  font-size: 1.5em;
  margin: 16px auto 8px auto;
`;

const Classification = styled.p`
  color: slategray;
  margin: 8px auto;
`;

const ImageContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const Description = styled.div`
  width: 100%;
  align-self: flex-end;
`;

const ListPokemons = function({ pokemons, filter, size }) {
  console.log(pokemons.length);
  console.log(`filter ${filter}`);
  return (
    <CardListContainer>
      {pokemons.map(pokemon => {
        if (filter && !pokemon.types.includes(filter)) {
          console.log(`skip ${pokemon.name}`);
          return null;
        } else {
          console.log(`ok ${pokemon.name}`);
          return (
            <Card key={pokemon.id} to={`detail/${pokemon.name}`} size={size}>
              <ImageContainer>
                <img src={pokemon.image} width="100%" />
              </ImageContainer>
              <Description>
                <Name>{pokemon.name}</Name>
                <Classification>{pokemon.classification}</Classification>
                <p>{pokemon.types.join(", ")}</p>
              </Description>
            </Card>
          );
        }
      })}
    </CardListContainer>
  );
};
