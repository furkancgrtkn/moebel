import React, { useState } from "react";
import styled from "styled-components";
import GlobalHeader from "../components/GlobalHeader";
import Layout from "../components/Layout/Layout";
import { BsX } from "react-icons/bs";
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
  margin-bottom: 20px;
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

const ModalDiv = styled.div`
  width: 95%;
  max-width: 753px;
  display: flex;
  margin: auto;
  z-index: 10;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 6px 10px 5px 10px;
  align-items: center;
`;

const Text = styled.p`
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  padding-right: 5px;
  display: flex;
  justify-content: center;
  width: 100%;
  padding-left: 20px;
  color: ${(props) => props.theme.colors.texColorPrimaryLight};
`;

const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margin-left: auto;
`;

function Impressum() {
  const [modal, setModal] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setModal(true);
  };
  return (
    <Layout>
      <Container>
        <GlobalHeader value="Kontakt" />
        <Forms onSubmit={(e) => handleSubmit(e)}>
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
        {modal && (
          <ModalDiv>
            <Text>Ihre Nachricht wurde versendet.</Text>
            <CloseButton
              onClick={() => {
                setModal(false);
              }}
            >
              <BsX size={20} color="#9C9C9C" />
            </CloseButton>
          </ModalDiv>
        )}
      </Container>
    </Layout>
  );
}

export default Impressum;
