import React from "react";
import styled from "styled-components";
import GlobalHeader from "../components/GlobalHeader";
import Layout from "../components/Layout/Layout";
const Container = styled.div`
  width: 100%;
  max-width: 1245px;
  padding: 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  min-height: calc(100vh - 195px);
`;

const Forms = styled.form`
  width: 100%;
  max-width: 402px;
  padding: 0px;
  display: flex;
  flex-direction: column;
`;

const Inputs = styled.div`
  width: 100%;

  input {
    width: 100%;
    height: 40px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 10px;
    font-family: "Nunito", sans-serif;
    color: ${(props) => props.theme.colors.texColorPrimaryLight};
    letter-spacing: 0.08px;
    padding: 0 30px;
    border: none;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};

    ::placeholder {
      font-family: "Nunito", sans-serif;
      color: ${(props) => props.theme.colors.texColorPrimaryLight};
    }
  }
`;

const Btn = styled.button`
  width: 196px;
  height: 40px;
  padding-top: 4px;
  display: flex;
  justify-content: center;
  font-weight: 600;
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  color: ${(props) => props.theme.colors.textColorPrimary};
  letter-spacing: 0.08px;
  align-items: center;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin: 10px auto;
`;

const TextAreas = styled.div`
  width: 100%;

  textarea {
    width: 100%;
    height: 289px;
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    margin-bottom: 10px;
    font-family: "Nunito", sans-serif;
    color: ${(props) => props.theme.colors.texColorPrimaryLight};
    letter-spacing: 0.08px;
    padding: 20px 30px;
    border: none;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    resize: none;
    ::placeholder {
      font-family: "Nunito", sans-serif;
      color: ${(props) => props.theme.colors.texColorPrimaryLight};
    }
  }
`;

function Impressum() {
  return (
    <Layout>
      <Container>
        <GlobalHeader value="Kontakt" />
        <Forms>
          <Inputs>
            <input placeholder="Name eingeben"></input>
          </Inputs>
          <Inputs>
            <input placeholder="E-Mail eingeben"></input>
          </Inputs>
          <Inputs>
            <input placeholder="Telefonnummer eingeben (optional)"></input>
          </Inputs>
          <TextAreas>
            <textarea placeholder="Ihre Nachricht"></textarea>
          </TextAreas>
          <Btn>Nachricht absenden</Btn>
        </Forms>
      </Container>
    </Layout>
  );
}

export default Impressum;
