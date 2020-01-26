import * as React from "react";
import { useQuery } from "@apollo/react-hooks";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import PokeBallSpinner from "../../component/PokeBallSpinner";
import ErrorMessage from "../../component/ErrorMessage";
import { GET_POKEMONS } from "../../query";
import { PINK_BASE } from "../../constants/colors";

const Filters = styled.p`
  margin: 16px auto 8px auto;
  text-align: center;
`;

export default function Home() {
  const size = window && window.innerWidth < 960 ? "small" : "large";
  const { filter } = useParams();

  const totalFetchItem = {
    onStart: filter ? 60 : 21,
    onMore: filter ? 30 : 12
  };
  const [variables, setVariables] = React.useState({
    first: totalFetchItem.onStart
  });
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
        first: variables.first + totalFetchItem.onMore
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

  if (error) return <ErrorMessage />;

  const pokemonFetched = data ? data.pokemons : [];
  const limitExceed = pokemonFetched.length > 150;
  const filterArray = filter ? filter.split("&") : [];
  return (
    <>
      {filter && <Filters>filter : {filterArray.join(", ")}</Filters>}
      <ListPokemons
        pokemons={pokemonFetched}
        filter={filterArray}
        size={size}
      />
      {<PokeBallSpinner display={!limitExceed} />}
    </>
  );
}

const CardListContainer = styled.div`
  min-height: 200px;
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
  border: 2px solid gainsboro;
  border-radius: 8px;
  color: black;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: rotate(1deg);
    border: 2px solid ${PINK_BASE};
  }
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
  return (
    <CardListContainer>
      {pokemons.map(pokemon => {
        if (filter.length > 0) {
          if (filter.some(item => pokemon.types.includes(item))) {
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
        } else {
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
