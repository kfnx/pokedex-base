import React from "react";
import styled from "styled-components";
import { PINK_BASE } from "../../constants/colors";
import POKEMON_TYPES from "../../constants/pokemonTypes";

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  top: ${props => (props.display === "true" ? "0px" : "-1500px")};
  left: 0px;
  z-index: 999;
  height: 100%;
  background-color: ${PINK_BASE};
  text-align: center;
  color: darkslategray;
  line-height: 2.5em;
  transition: all 0.35s ease-in-out;
`;

const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 24px;
  font-size: 2em;
  margin: 0px;
  cursor: pointer;
`;

const TypeListContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: auto 15%;
  /* flex-direction: column; */
`;

const Type = styled.li`
  width: 35%;
  display: inline-block;
  transition: all 0.35 ease-in-out;
  cursor: pointer;
  &:after {
    content: " C";
  }
  &:hover {
    opacity: 0.5;
  }
`;

const SuggestionSentence = styled.p`
  font-size: 0.8em;
  margin-bottom: 32px;
`;

const FilterButton = styled.button`
  margin-top: 32px;
  background-color: transparent;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 1.5em;
  color: darkslategray;
  border: 2px solid darkslategray;
  &:hover {
    background-color: darkslategray;
    color: ${PINK_BASE};
  }
`;

export default function(props) {
  const { display } = props;
  return (
    <Container display={display.toString()}>
      <CloseButton onClick={props.onClose}>x</CloseButton>
      <SuggestionSentence>Select pokémon types to filter</SuggestionSentence>
      <TypeListContainer>
        {POKEMON_TYPES.map(type => (
          <Type key={type}>{type}</Type>
        ))}
      </TypeListContainer>
      <FilterButton>Filter</FilterButton>
    </Container>
  );
}
