import React from "react";
import styled from "styled-components";
import GlobalHeader from "../components/GlobalHeader";
import Layout from "../components/Layout/Layout";
const Container = styled.div`
  width: 100%;
  max-width: 1246px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  min-height: calc(100vh - 195px);
`;

function Impressum() {
  return (
    <Layout>
      <Container>
        <GlobalHeader value="Impressum" />
      </Container>
    </Layout>
  );
}

export default Impressum;
