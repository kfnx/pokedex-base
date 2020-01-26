import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { PINK_BASE } from "../../constants/colors";

const Container = styled.div`
  margin: 175px auto;
  text-align: center;
  line-height: 2.5em;
`;

const HomeLink = styled(Link)`
  color: ${PINK_BASE};
  font-size: 1.2em;
`;

export default function() {
  return (
    <Container>
      <p>There is some technical problem</p>
      <HomeLink to="/">Please Back to Home</HomeLink>
    </Container>
  );
}
