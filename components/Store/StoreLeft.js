import React, { useState } from "react";
import styled from "styled-components";
import { Range, getTrackBackground } from "react-range";
const Container = styled.div`
  width: 299px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  margin: 0 10px;
  display: flex;
  margin-top: 10px;
  flex-direction: column;
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
  padding: 21px 34px;
  padding-top: 0;
  margin-top: 21px;

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-thumb {
    background: #aeaeae;
    border-radius: 8px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #999999;
  }
  ::-webkit-scrollbar-track {
    background: #f9f9f9;
    border-radius: 8px;
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

const PricesHead = styled.span`
  font-family: "Nunito", sans-serif;
  font-size: 16px;
  display: flex;
  margin-bottom: 15px;
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
`;

function StoreLeft() {
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
              ],
            },
          ],
        },
      ],
    },
    {
      value: "Garten",
      leftMenus: [
        {
          value: "Gartenmöbel",
          data: [
            {
              value: "Gartenmöbel-Sets",
              data: [
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
    <Container>
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
                                  <CategoriesLiSpan>{l.value}</CategoriesLiSpan>
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
        <PricesHead>Preis</PricesHead>
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
              <EInput readOnly value={values[0].toFixed(1)}></EInput>
            </InputDiv>
            <InputDiv>
              <EInput readOnly value={values[1].toFixed(1)}></EInput>
            </InputDiv>
          </Inputs>
        </div>
      </Prices>
    </Container>
  );
}

export default StoreLeft;
