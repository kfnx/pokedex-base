import { gql } from "apollo-boost";

const GET_POKEMONS = gql`
  query getPokemons($first: Int!) {
    pokemons(first: $first) {
      id
      name
      image
      types
      number
      classification
    }
  }
`;

const GET_POKEMON_DETAIL = gql`
  query getPokemon($name: String) {
    pokemon(name: $name) {
      id
      name
      image
      classification
      resistant
      weaknesses
      types
      maxHP
      maxCP
      fleeRate
      evolutions {
        id
        name
        image
        number
        types
        maxHP
        maxCP
        evolutionRequirements {
          name
          amount
        }
      }
      number
    }
  }
`;

export { GET_POKEMONS, GET_POKEMON_DETAIL };
