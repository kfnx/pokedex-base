import React from "react";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";
import SelectFilter from "../SelectFilter";
import { PINK_BASE } from "../../constants/colors";

const Container = styled.div`
  width: 100vw;
`;

const Content = styled.div`
  padding: 8px 16px;
`;

function Layout(props) {
  const { children, location } = props;
  const [displayFilterSelection, setDisplayFilterSelection] = React.useState(
    false
  );

  return (
    <Container>
      <Header
        location={location}
        showFilterSelection={() => setDisplayFilterSelection(true)}
      />
      <Content>
        {React.cloneElement(children, {
          token: location.key // trigger re-render
        })}
      </Content>
      <SelectFilter
        display={displayFilterSelection}
        onClose={() => setDisplayFilterSelection(false)}
      />
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

const HeaderButton = styled.div`
  width: 96px;
`;

const Title = styled(Link)`
  line-height: 35px;
  margin: 0px;
  font-size: 1.3em;
  font-weight: bold;
  color: ${PINK_BASE};
  text-decoration: none;
`;

const BrandIcon = styled.img`
  height: 32px;
`;

const FilterButton = styled.div`
  color: ${PINK_BASE};
  cursor: pointer;
  &:hover {
    opacity: 0.75;
  }
`;

const BackIcon = styled.span`
  font-size: 1.4em;
`;

function Header(props) {
  const { location, showFilterSelection } = props;
  const showFilterButton =
    !location.pathname.includes("/detail/") ||
    location.pathname.includes("/filter/");
  const showBackButton = location.pathname.includes("/detail/");
  return (
    <HeaderContainer>
      <HeaderButton>
        {showBackButton ? (
          <Title to="/">
            <BackIcon>&#8249;</BackIcon> Back
          </Title>
        ) : (
          <Title to="/">Pokédex</Title>
        )}
      </HeaderButton>
      <BrandIcon src="https://cdn6.aptoide.com/imgs/c/0/e/c0e7d9bd31301617394b4e023a66776e_icon.png" />
      <HeaderButton>
        {showFilterButton && (
          <FilterButton onClick={showFilterSelection}>FILTER</FilterButton>
        )}
      </HeaderButton>
    </HeaderContainer>
  );
}

export default withRouter(Layout);
