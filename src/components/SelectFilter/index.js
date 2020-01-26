import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { PINK_BASE, DARK_SLATE_GRAY } from "../../constants/colors";
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
  width: 100%;
  background-color: ${PINK_BASE};
  text-align: center;
  color: ${DARK_SLATE_GRAY};
  line-height: 2.5em;
  transition: all 0.2s ease-in-out;
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
`;

const Type = styled.li`
  width: 30%;
  &:nth-child(even) {
    margin-right: 20%;
  }
  &:nth-child(odd) {
    margin-left: 20%;
  }
  display: inline-block;
  transition: all 0.35 ease-in-out;
  text-align: center;
  cursor: pointer;
  ${props =>
    props.check &&
    `
    &:after {
      content: " ✔️";
    }
  `};
  &:hover {
    opacity: 0.5;
  }
`;

const SuggestionSentence = styled.p`
  font-size: 0.8em;
  margin-bottom: 24px;
`;

const FilterButton = styled(Link)`
  margin-top: 24px;
  background-color: transparent;
  border-radius: 8px;
  padding: 8px 16px;
  font-size: 1.4em;
  text-decoration: none;
  color: ${DARK_SLATE_GRAY};
  border: 2px solid ${DARK_SLATE_GRAY};
  cursor: pointer;
  transition: all 0.35 ease-in-out;
  &:hover {
    background-color: ${DARK_SLATE_GRAY};
    color: ${PINK_BASE};
  }
`;

export default function(props) {
  const [selectedFilters, selectFilter] = useState([]);
  const { display, onClose } = props;

  const handleSetFilter = type => {
    if (selectedFilters.includes(type)) {
      selectFilter(selectedFilters.filter(item => item != type));
    } else {
      selectFilter([...selectedFilters, type]);
    }
  };

  const filterUrl = `/filter/${selectedFilters.join("&")}`;

  const handleClickFilter = () => {
    if (selectedFilters.length <= 0) {
      window.alert("please select pokemon types to filter");
    } else {
      onClose();
      setTimeout(function() {
        location.replace(filterUrl);
      }, 350);
    }
  };

  return (
    <Container display={display.toString()}>
      <CloseButton onClick={onClose}>x</CloseButton>
      <SuggestionSentence>Select pokémon types to filter</SuggestionSentence>
      <TypeListContainer>
        {POKEMON_TYPES.map(type => (
          <Type
            key={type}
            onClick={() => handleSetFilter(type)}
            check={selectedFilters.includes(type)}
          >
            {type}
          </Type>
        ))}
      </TypeListContainer>
      <FilterButton to={filterUrl} onClick={handleClickFilter}>
        Filter
      </FilterButton>
    </Container>
  );
}
