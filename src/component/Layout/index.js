import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
`;

const Content = styled.div`
  padding: 8px 16px;
`;

function Layout({ children, location }) {
  return (
    <Container>
      <Header location={location} />
      <Content>{children}</Content>
    </Container>
  );
}

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 32px;
  padding: 16px;
  -webkit-box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.1);
`;

function Header({ location }) {
  const locationIsHome = location.pathname === "/";
  const locationIsDetail = location.pathname.includes("/detail/");
  return (
    <HeaderContainer>
      {locationIsDetail ? <Link to="/">Back</Link> : "Pokédex"}
      <Link to="/">Home</Link>
      {locationIsHome && <button>FILTER</button>}
    </HeaderContainer>
  );
}

export default withRouter(Layout);
