import React, { useState, useRef } from "react";
import styled from "styled-components";
import { BsArrowLeftRight, BsChevronUp, BsGift } from "react-icons/bs";
import { GiSettingsKnobs } from "react-icons/gi";
import useOutsideClick from "../utils/useOutsideClick";

const Container = styled.div`
  width: calc(100% - 330px);
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  margin-right: 10px;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  @media (max-width: 1250px) {
    width: 100%;
    margin: 0 10px;
    margin-top: 10px;
  }
`;

const LeftS = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: flex;
  flex-direction: column;
`;

const TopS = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: flex;
  margin-left: 30px;
  justify-content: space-between;
  @media (max-width: 1250px) {
    flex-direction: column;
    margin-left: 0px;
  }
`;

const Header = styled.h2`
  font-family: "Nunito", sans-serif;
  font-size: 26px;
  display: flex;
  margin-bottom: 7px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textColorPrimary};
  span {
    font-size: 12px;
    margin-left: 12px;
    display: flex;
    align-items: flex-end;
    padding-bottom: 4px;
    color: ${(props) => props.theme.colors.texColorPrimaryLight};
  }
  @media (max-width: 1250px) {
    justify-content: center;
    span {
      display: none;
    }
  }
`;

const BreadCrumb = styled.div`
  display: flex;
  font-size: 12px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  color: ${(props) => props.theme.colors.texColorPrimaryLight};

  button {
    :first-child {
      margin-left: 0;
    }
  }
  @media (max-width: 650px) {
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    max-width: 280px;
    button {
      :nth-child(4) {
        margin-left: 0px;
        margin-top: 6px;
      }
      :nth-child(5) {
        margin-top: 6px;
      }
    }
  }
`;

const BreadCrumbItem = styled.button`
  display: flex;
  font-size: 12px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  color: ${(props) => props.theme.colors.texColorPrimaryLight};
  border: none;
  margin-left: 2px;
  margin-right: 2px;

  @media (max-width: 650px) {
    /* margin-top: 4px; */
    /* display: block;
    max-width: 48px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap; */
  }
`;

const RightS = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: flex;
  margin-top: 15px;
  @media (max-width: 1250px) {
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
`;

const Sale = styled.button`
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 40px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  color: #e99d9d;
  margin-right: 8px;
  svg {
    display: none;
  }
  @media (max-width: 1250px) {
    svg {
      display: block;
      margin-right: 6px;
      margin-bottom: 2px;
      filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.1));
    }
    width: 74px;
    margin-right: 0px;
    margin-left: 8px;
    font-size: 13px;
    padding-top: 1px;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
  }
`;

const Filters = styled.button`
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: none;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 40px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  margin-right: 8px;
  svg {
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.16));
  }
  span {
    font-size: 12px;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textColorPrimary};
    margin-left: 8px;
  }
  @media (max-width: 1250px) {
    display: flex;
    width: 105px;
    margin-right: 0px;
    margin-left: 8px;
  }
`;

const Dropdown = styled.div`
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: flex;
  position: relative;
`;

const DInner = styled.button`
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: flex;
  align-items: center;
  padding: 0 13px;
  width: 215px;
  height: 40px;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  font-size: 12px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textColorPrimary};
  span {
    margin-right: 4px;
    font-size: 12px;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textColorPrimary};
  }
  svg {
    transform: rotate(-90deg);
    margin-right: 8px;
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.16));
  }
  @media (max-width: 1250px) {
    width: 105px;
    margin-right: 0px;
    span {
      display: none;
    }
  }
`;

const DMenu = styled.div`
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 215px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  height: 94px;
  position: absolute;
  top: 50px;
  left: 0;
  z-index: 11;
  display: flex;
  padding: 13px 0;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  button {
    font-size: 12px;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textColorPrimary};
  }
`;

const Cards = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: space-between;
  position: relative;
  @media (max-width: 1250px) {
    margin-top: 10px;
  }
`;

const Card = styled.div`
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  width: 299px;
  height: 350px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};

  @media (max-width: 1250px) {
    width: 49.3%;
  }
  @media (max-width: 750px) {
    width: 100%;
  }
`;

const SeeMore = styled.button`
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 215px;
  height: 40px;
  margin: auto;
  margin-top: 40px;
  font-size: 16px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textColorPrimary};
  margin-bottom: 100px;
`;

const GoTop = styled.button`
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  position: absolute;
  right: 0;
  bottom: -80px;
  border-radius: 100%;
  margin-top: 40px;
  span {
    font-size: 12px;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    color: ${(props) => props.theme.colors.textColorPrimary};
    position: absolute;
    bottom: -20px;
    white-space: nowrap;
  }

  svg {
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.16));
  }

  @media (max-width: 1250px) {
    display: none;
  }
`;

function StoreRight({ setFilts }) {
  const [dpo, setDPO] = useState(false);
  const [dpoC, setDPOC] = useState("Preis absteigend");
  const ref = useRef();
  useOutsideClick(ref, () => {
    setDPO(false);
  });
  return (
    <Container>
      <TopS>
        <LeftS>
          <Header>
            Ecksofas <span>16853 Ergebnisse</span>
          </Header>
          <BreadCrumb>
            <BreadCrumbItem>Startseite {" >"}</BreadCrumbItem>
            <BreadCrumbItem>Möbel{" >"}</BreadCrumbItem>
            <BreadCrumbItem>Wohnzimmer{" >"}</BreadCrumbItem>
            <BreadCrumbItem>Sofas & Couches{" >"}</BreadCrumbItem>
            <BreadCrumbItem>Ecksofas</BreadCrumbItem>
          </BreadCrumb>
        </LeftS>
        <RightS>
          <Filters
            onClick={() => {
              setFilts(true);
              document.getElementsByTagName("body")[0].style =
                "overflow:hidden";
            }}
          >
            <GiSettingsKnobs size={18} color="#9C9C9C" />
            <span>Filtern</span>
          </Filters>
          <Sale>
            <BsGift size={16} color="#E99D9D" />
            Sale
          </Sale>
          <Dropdown ref={ref}>
            <DInner onClick={() => setDPO(!dpo)}>
              <BsArrowLeftRight size={18} color="#9C9C9C" />
              Sortieren <span>: {dpoC} </span>
            </DInner>
            {dpo && (
              <DMenu>
                <button
                  onClick={() => {
                    setDPOC("Beliebtheit");
                    setDPO(!dpo);
                  }}
                >
                  Beliebtheit
                </button>
                <button
                  onClick={() => {
                    setDPOC("Preis aufsteigend");
                    setDPO(!dpo);
                  }}
                >
                  Preis aufsteigend
                </button>
                <button
                  onClick={() => {
                    setDPOC("Preis absteigend");
                    setDPO(!dpo);
                  }}
                >
                  Preis absteigend
                </button>
              </DMenu>
            )}
          </Dropdown>
        </RightS>
      </TopS>
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
        <GoTop>
          <BsChevronUp
            onClick={() => window.scrollTo(0, 0)}
            size={25}
            color="#9C9C9C"
          />
          <span>Nach oben</span>
        </GoTop>
      </Cards>
      <SeeMore>Mehr laden</SeeMore>
    </Container>
  );
}

export default StoreRight;
