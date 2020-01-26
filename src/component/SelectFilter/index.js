import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;
  top: ${props => (props.display === "true" ? "0px" : "-1500px")};
  left: 0px;
  z-index: 999;
  height: 100vw;
  width: 100vw;
  background-color: #fa6f61;
  text-align: center;
  color: white;
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

export default function(props) {
  const { display } = props;
  return (
    <Container display={display.toString()}>
      <CloseButton onClick={props.onClose}>x</CloseButton>
      <ul>
        <li>Water</li>
        <li>Normal</li>
        <li>Grass</li>
        <li>Water</li>
        <li>Normal</li>
        <li>Grass</li>
      </ul>
    </Container>
  );
}
