import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON_DETAIL } from "../../query";

export default function Detail() {
  const { id, name } = useParams();
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { id, name }
  });

  if (loading) return <p>LOADING</p>;
  if (error) return <p>ERROR</p>;

  return (
    <>
      <b>DETAIL</b>
      <p>{data.pokemon && JSON.stringify(data.pokemon)}</p>
    </>
  );
}
