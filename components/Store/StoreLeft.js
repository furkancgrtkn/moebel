import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Range, getTrackBackground } from "react-range";
import { BsX } from "react-icons/bs";
const ContainerWrapper = styled.div`
  display: block;
  @media (max-width: 1250px) {
    ${(props) =>
      props.filts &&
      css`
        height: 100vh;
        display: ${(props) => (props.filts ? "block" : "none")};
        position: fixed;
        z-index: 89;
        top: 0px;
        right: 0px;
        width: 100%;
        justify-items: right;
        overflow-y: scroll;
        background-color: #f7f7f7d1;
      `};
  }
`;

const Container = styled.div`
  width: 299px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  margin: 0 10px;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
  @media (max-width: 1250px) {
    display: ${(props) => (props.filts ? "flex" : "none")};
    width: 255px;

    ${(props) =>
      props.filts &&
      css`
        position: absolute;
        z-index: 89;
        top: 0px;
        right: 0px;
      `};
  }
`;

const Categories = styled.div`
  width: 100%;
  height: 346px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 10px;
  overflow: hidden;
`;

const CategoriesInner = styled.div`
  width: 90%;
  border-radius: 10px;
  overflow-y: auto;
  height: 306px;
  padding: 0 34px;
  margin-top: 21px;

  ::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }
  ::-webkit-scrollbar-thumb {
    background: #aeaeae;
    border-radius: 9px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #999999;
  }
  ::-webkit-scrollbar-track {
    background: #f9f9f9;
    border-radius: 9px;
    box-shadow: inset 0px 0px 2px #e0e0e0;
  }
`;

const CategoriesUL = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const CategoriesULIn = styled.ul`
  width: 100%;
  display: flex;
  padding-left: 20px;
  flex-direction: column;
`;

const CategoriesLi = styled.li``;

const CategoriesLiSpan = styled.span`
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  display: flex;
  margin-bottom: 6px;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textColorPrimary};
`;

const Colors = styled.div`
  width: 100%;
  height: 210px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 10px;
  padding: 21px 34px;
  overflow: hidden;
  @media (max-width: 1250px) {
    padding-right: 20px;
    height: 250px;
  }
`;

const ColorsHead = styled.span`
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textColorPrimary};
`;

const ColorCont = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Color = styled.div`
  width: 35px;
  height: 35px;
  box-shadow: 3px 3px 6px #00000029;
  border-radius: 100%;
  background-color: ${(props) => props.hex && props.hex};
  margin-bottom: 10px;
  margin-right: 10px;
  cursor: pointer;
`;

const Prices = styled.div`
  width: 100%;
  height: 132px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 10px;
  padding: 21px 34px;
  overflow: hidden;
`;

const GHead = styled.span`
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  display: flex;
  margin-bottom: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textColorPrimary};
`;

const GHead2 = styled.span`
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  display: flex;
  margin-bottom: 15px;
  padding: 21px 34px 0 34px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textColorPrimary};
`;

const Inputs = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-left: -10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

const InputDiv = styled.div`
  width: 65px;
  display: flex;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  align-items: flex-end;
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  font-weight: 400;
  cursor: default;
  user-select: none;
  pointer-events: none;
  color: ${(props) => props.theme.colors.textColorPrimary};
`;

const EInput = styled.input`
  font-family: "Nunito", sans-serif;
  font-size: 14px;
  display: flex;
  margin-top: 12px;
  font-weight: 400;
  border: none;
  border-bottom: 1px solid #a9a9a9;
  width: 50px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  color: ${(props) => props.theme.colors.textColorPrimary};
  margin-right: 5px;
  cursor: default;
`;

const Conts = styled.div`
  width: 100%;
  height: 346px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 10px;
  overflow: hidden;
`;

const ContsInner = styled.div`
  width: 90%;
  border-radius: 10px;
  overflow-y: auto;
  height: 266px;
  padding: 0 34px;
  margin-top: 21px;

  ::-webkit-scrollbar {
    width: 9px;
    height: 9px;
  }
  ::-webkit-scrollbar-thumb {
    background: #aeaeae;
    border-radius: 9px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #999999;
  }
  ::-webkit-scrollbar-track {
    background: #f9f9f9;
    border-radius: 9px;
    box-shadow: inset 0px 0px 2px #e0e0e0;
  }

  li {
    font-family: "Nunito", sans-serif;
    font-size: 16px;
    margin-bottom: 8px;
    font-weight: 400;
    color: ${(props) => props.theme.colors.textColorPrimary};
    cursor: pointer;
    display: table;
  }
`;

const FiltersClose = styled.button`
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: none;
  justify-content: center;
  align-items: center;
  width: 76px;
  height: 40px;
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 10px;
  margin-right: 8px;
  position: fixed;
  left: 0px;
  top: 10px;
  @media (max-width: 1250px) {
    display: flex;
    width: 40px;
    margin-right: 0px;
    margin-left: 8px;
  }
  svg {
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
  }
`;

function StoreLeft({ filts, setFilts }) {
  const catData = [
    {
      value: "Möbel",
      leftMenus: [
        {
          value: "Wohnzimmer",
          data: [
            {
              value: "Sofas & Couches",
              data: [
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
                { value: "Ecksofas" },
              ],
            },
          ],
        },
      ],
    },
  ];

  const STEP = 0.1;
  const MIN = 0;
  const MAX = 100;
  const [values, setValues] = useState([25, 75]);
  return (
    <ContainerWrapper filts={filts}>
      <Container filts={filts}>
        <FiltersClose
          onClick={() => {
            setFilts(false);
            document.getElementsByTagName("body")[0].style = "overflow:unset";
          }}
        >
          <BsX size={30} color="#9C9C9C" />
        </FiltersClose>
        <Categories>
          <CategoriesInner>
            <CategoriesUL>
              {catData.map((e, idx) => (
                <CategoriesLi key={idx}>
                  <CategoriesLiSpan>{e.value}</CategoriesLiSpan>
                  <CategoriesULIn>
                    {e.leftMenus.map((d, ix) => (
                      <CategoriesLi key={ix}>
                        <CategoriesLiSpan>{d.value}</CategoriesLiSpan>
                        <CategoriesULIn>
                          {d.data.map((k, i) => (
                            <CategoriesLi key={i}>
                              <CategoriesLiSpan> {k.value}</CategoriesLiSpan>
                              <CategoriesULIn>
                                {k.data.map((l, il) => (
                                  <CategoriesLi key={il}>
                                    {" "}
                                    <CategoriesLiSpan>
                                      {l.value}
                                    </CategoriesLiSpan>
                                  </CategoriesLi>
                                ))}
                              </CategoriesULIn>
                            </CategoriesLi>
                          ))}
                        </CategoriesULIn>
                      </CategoriesLi>
                    ))}
                  </CategoriesULIn>
                </CategoriesLi>
              ))}
            </CategoriesUL>
          </CategoriesInner>
        </Categories>
        <Colors>
          <ColorsHead>Farbe</ColorsHead>
          <ColorCont>
            <Color hex="#EBB2B2" />
            <Color hex="#64B59D" />
            <Color hex="#B2B488" />
            <Color hex="#A29EE0" />
            <Color hex="#D96060" />
            <Color hex="#F5E369" />
            <Color hex="#967832" />
            <Color hex="#9B9B9B" />
            <Color hex="#525252" />
            <Color hex="#AD6363" />
            <Color hex="#B9E89E" />
            <Color hex="#7B78C0" />
            <Color hex="#4F7A4C" />
            <Color hex="#B2E2EB" />
            <Color hex="#E7B2EB" />
          </ColorCont>
        </Colors>
        <Prices>
          <GHead>Preis</GHead>
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              marginLeft: "10px",
            }}
          >
            <Range
              draggableTrack
              values={values}
              step={STEP}
              min={MIN}
              max={MAX}
              onChange={(values) => {
                setValues(values);
              }}
              renderTrack={({ props, children }) => (
                <div
                  onMouseDown={props.onMouseDown}
                  onTouchStart={props.onTouchStart}
                  style={{
                    ...props.style,
                    height: "20px",
                    display: "flex",
                    width: "190px",
                  }}
                >
                  <div
                    ref={props.ref}
                    style={{
                      height: "5px",
                      width: "100%",
                      borderRadius: "4px",
                      background: getTrackBackground({
                        values,
                        colors: ["#ccc", "#9C9C9C", "#ccc"],
                        min: MIN,
                        max: MAX,
                      }),
                      alignSelf: "center",
                    }}
                  >
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: "20px",
                    width: "20px",
                    borderRadius: "20px",
                    backgroundColor: "#9C9C9C",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    boxShadow: "0px 2px 6px #AAA",
                  }}
                ></div>
              )}
            />
            <Inputs>
              <InputDiv>
                <EInput readOnly value={values[0].toFixed(1)}></EInput>€
              </InputDiv>
              <InputDiv>
                <EInput readOnly value={values[1].toFixed(1)}></EInput>€
              </InputDiv>
            </Inputs>
          </div>
        </Prices>
        <Conts>
          <GHead2>Suchvorschläge</GHead2>
          <ContsInner>
            <ul>
              <li>Doppelbett 180x200</li>
              <li>Doppelbett 180x200</li>
              <li>Doppelbett 180x200</li>
              <li>Doppelbett 180x200</li>
              <li>Doppelbett 180x200</li>
              <li>Doppelbett 180x200</li>
              <li>Doppelbett 180x200</li>
              <li>Doppelbett 180x200</li>
              <li>Doppelbett 180x200</li>
              <li>Doppelbett 180x200</li>
              <li>Doppelbett 180x200</li>
              <li>Doppelbett 180x200</li>
              <li>Doppelbett 180x200</li>
              <li>Doppelbett 180x200</li>
              <li>Doppelbett 180x200</li>
            </ul>
          </ContsInner>
        </Conts>
        <Conts>
          <GHead2>Marke</GHead2>
          <ContsInner>
            <ul>
              <li>Ikea</li>
              <li>Ikea</li>
              <li>Ikea</li>
              <li>Ikea</li>
              <li>Ikea</li>
              <li>Ikea</li>
              <li>Ikea</li>
              <li>Ikea</li>
              <li>Ikea</li>
              <li>Ikea</li>
              <li>Ikea</li>
              <li>Ikea</li>
              <li>Ikea</li>
              <li>Ikea</li>
            </ul>
          </ContsInner>
        </Conts>
        <Conts>
          <GHead2>Material</GHead2>
          <ContsInner>
            <ul>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
              <li>Leder</li>
            </ul>
          </ContsInner>
        </Conts>
      </Container>
    </ContainerWrapper>
  );
}

export default StoreLeft;