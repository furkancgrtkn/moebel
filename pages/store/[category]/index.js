import React from "react";
import Layout from "../../../components/Layout/Layout";
import StoreLeft from "../../../components/Store/StoreLeft";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  max-width: 1246px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  margin: auto;
  display: flex;
`;
function Category() {
  return (
    <Layout>
      <Container>
        <StoreLeft></StoreLeft>
      </Container>
    </Layout>
  );
}

export default Category;
