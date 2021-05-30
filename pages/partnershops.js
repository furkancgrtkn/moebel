import React from 'react';
import GlobalHeader from '../components/GlobalHeader';
import styled from 'styled-components';
import Layout from '../components/Layout/Layout';

const Container = styled.div`
  width: 100%;
  max-width: 1245px;
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
  box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
  border-radius: 10px;
  width: 195.5px;
  height: 149px;
  background-color: #f0bcbc;
  margin: 5px;
  @media (max-width: 500px) {
    width: 47.3%;
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
