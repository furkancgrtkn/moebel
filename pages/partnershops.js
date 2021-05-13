import React from "react";
import GlobalHeader from "../components/GlobalHeader";
import styled from "styled-components";
import Layout from "../components/Layout/Layout";

const Container = styled.div`
  width: 100%;
  max-width: 1246px;
  display: flex;
  padding: 0 5px;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-bottom: 90px;
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  @media (max-width: 1250px) {
    justify-content: center;
  }
`;

const Card = styled.div`
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 10px;
  width: 196px;
  height: 149px;
  background-color: #f0bcbc;
  margin: 5px;
  @media (max-width: 400px) {
    width: 70.3%;
    margin-left: auto;
    margin-right: auto;
  }
`;

function Partnershops() {
  return (
    <Layout>
      <Container>
        <GlobalHeader value="Partnershops" />
        <Cards>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </Cards>
      </Container>
    </Layout>
  );
}

export default Partnershops;
