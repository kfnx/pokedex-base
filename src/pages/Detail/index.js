import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import ErrorMessage from "../../components/ErrorMessage";
import PokeBallSpinner from "../../components/PokeBallSpinner";
import { GET_POKEMON_DETAIL } from "../../query";
import { PINK_BASE } from "../../constants/colors";

const Container = styled.div`
  width: 86%;
  margin: 12px auto;
`;

const Name = styled.h1`
  font-size: 1.8em;
  font-weight: bold;
  margin: 16px auto 12px auto;
  text-align: center;
`;

const Classification = styled.p`
  color: slategray;
  margin: 8px auto;
  text-align: center;
`;

const FlexContent = styled.div`
  margin-top: 16px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const PokemonImage = styled.div`
  border: 2px solid gainsboro;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
  margin: 16px auto 8px 0px;
  width: ${props => (props.size === "small" ? "100%" : "44%")};
`;

const Statistic = styled.div`
  border: 2px solid gainsboro;
  border-radius: 8px;
  padding: 16px;
  margin: 16px 0px 8px auto;
  width: ${props => (props.size === "small" ? "100%" : "44%")};
`;

const Title = styled.p`
  font-size: 0.8em;
  color: slategray;
  margin: 12px auto 8px auto;
  text-align: left;
`;

const Text = styled.p`
  line-height: 1.4em;
`;

export default function Detail() {
  const size = window && window.innerWidth < 960 ? "small" : "large";
  const { name } = useParams();
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name }
  });

  React.useEffect(() => {
    document.title = `${name} | Pokédex`;
  }, []);

  if (error) return <ErrorMessage />;

  if (data && data.pokemon) {
    const {
      name,
      classification,
      image,
      evolutions,
      weight,
      height,
      types,
      attacks,
      resistant,
      weaknesses
    } = data.pokemon;
    return (
      <Container>
        <Name>{name}</Name>
        <Classification>{classification}</Classification>
        <FlexContent>
          <PokemonImage size={size}>
            <img src={image} width="100%" />
          </PokemonImage>
          <Statistic size={size}>
            <Title>Weight</Title>
            <Text>{`${weight.minimum} - ${weight.maximum}`}</Text>
            <Title>Height</Title>
            <Text>{`${height.minimum} - ${height.maximum}`}</Text>
            <Title>Types</Title>
            <Text>{types.join(", ")}</Text>
            <Title>Fast attacks</Title>
            <Text>
              {attacks &&
                attacks.fast.map(i => `${i.name} (${i.type})`).join(", ")}
            </Text>
            <Title>Special attacks</Title>
            <Text>
              {attacks &&
                attacks.special.map(i => `${i.name} (${i.type})`).join(", ")}
            </Text>
            <Title>Resistant</Title>
            <Text>{resistant.join(", ")}</Text>
            <Title>Weaknesses</Title>
            <Text>{weaknesses.join(", ")}</Text>
          </Statistic>
          {Array.isArray(evolutions) && (
            <Evolution evolutions={evolutions} size={size} />
          )}
        </FlexContent>
      </Container>
    );
  } else {
    return <PokeBallSpinner display fallback />;
  }
}

const EvolutionCard = styled.div`
  border: 2px solid gainsboro;
  border-radius: 8px;
  padding: 16px;
  margin: 16px auto;
  width: 100%;
`;

const EvoPokemonImage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  ${props =>
    props.size === "small"
      ? `
        width: 64px;
        height: 64px;
        margin: 8px;
      `
      : `
        width: 128px;
        height: 128px;
        margin: 8px 16px;
  `};
  padding: 4px;
`;

const FlexContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
`;

const EvolutionItem = styled(Link)`
  text-decoration: none;
  color: ${PINK_BASE};
  text-align: center;
`;

function Evolution(props) {
  const { size } = props;
  return (
    <EvolutionCard size={size}>
      <Title>Evolution</Title>
      <FlexContainer>
        {props.evolutions.map(i => (
          <EvolutionItem to={`/detail/${i.name}`} key={i.id}>
            <EvoPokemonImage size={size}>
              <img src={i.image} width="100%" />
            </EvoPokemonImage>
            <h3>{i.name}</h3>
          </EvolutionItem>
        ))}
      </FlexContainer>
    </EvolutionCard>
  );
}
