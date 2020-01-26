import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import styled from "styled-components";
import ErrorMessage from "../../components/ErrorMessage";
import PokeBallSpinner from "../../components/PokeBallSpinner";
import { GET_POKEMON_DETAIL } from "../../query";

const Container = styled.div`
  width: 86%;
  margin: 16px auto;
`;

const Name = styled.h1`
  font-size: 2em;
  font-weight: bold;
  margin: 16px auto 8px auto;
  text-align: center;
`;

const Classification = styled.p`
  color: slategray;
  margin: 8px auto;
  text-align: center;
`;

export default function Detail() {
  const { name } = useParams();
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name }
  });

  if (error) return <ErrorMessage />;

  console.log(data);
  if (data && data.pokemon) {
    const { name, classification, image, evolutions } = data.pokemon;
    return (
      <Container>
        <Name>{name}</Name>
        <Classification>{classification}</Classification>
        <img src={image} />
        <div>{JSON.stringify(data)}</div>

        <Evolution evolutions={evolutions} />
      </Container>
    );
  } else {
    return <PokeBallSpinner display fallback />;
  }
}

function Evolution(props) {
  if (props.evolutions) {
    return (
      <>
        <h2>EVOLUTION</h2>
        {props.evolutions.map(i => (
          <div key={i.id}>
            <img src={i.image} style={{ width: "50%" }} />
            <h3>{i.name}</h3>
          </div>
        ))}
      </>
    );
  } else {
    <h1>no evolution data recorded</h1>;
  }
}
