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
  query pokemonByName($name: String!) {
    pokemon(name: $name) {
      id
      name
      image
      weight {
        minimum
        maximum
      }
      height {
        minimum
        maximum
      }
      classification
      types
      resistant
      attacks {
        fast {
          name
          type
        }
        special {
          name
          type
        }
      }
      weaknesses
      evolutions {
        id
        name
        image
      }
    }
  }
`;

export { GET_POKEMONS, GET_POKEMON_DETAIL };
