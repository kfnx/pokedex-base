import * as React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@apollo/react-hooks";
import { GET_POKEMON_DETAIL } from "../../query";

export default function Detail() {
  const { name } = useParams();
  const { loading, error, data } = useQuery(GET_POKEMON_DETAIL, {
    variables: { name }
  });

  if (loading)
    return (
      <center>
        <h1>LOADING</h1>
      </center>
    );

  if (error)
    return (
      <p>
        ERROR
        <br />
        {JSON.stringify(error)}
      </p>
    );

  console.log(data);
  return (
    data && (
      <>
        <div>
          <h1>{data.pokemon.name}</h1>
          <img src={data.pokemon.image} />
          {data.pokemon.evolutions && (
            <>
              <h2>EVOLUTION</h2>
              {data.pokemon.evolutions.map(i => (
                <div key={i.id}>
                  <img src={i.image} />
                  <h3>{i.name}</h3>
                </div>
              ))}
            </>
          )}
        </div>
      </>
    )
  );
}
