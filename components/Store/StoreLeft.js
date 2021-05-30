import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { Range, getTrackBackground } from 'react-range';
import { BsX } from 'react-icons/bs';

const ContainerWrapper = styled.div`
  display: block;
  @media (max-width: 1250px) {
    ${(props) =>
      props.filts &&
      css`
        height: 100vh;
        display: ${(props) => (props.filts ? 'block' : 'none')};
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
    display: ${(props) => (props.filts ? 'flex' : 'none')};
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
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
  border-radius: 10px;
  overflow: hidden;
`;

const CategoriesInner = styled.div`
  width: 100%;
  border-radius: 10px;
  padding: 0 34px;
  margin-top: 21px;
  margin-bottom: 15px;
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
  font-family: 'Nunito', sans-serif;
  font-size: ${(props) => (props.header ? '16px' : '15px')};
  position: relative;
  display: flex;
  margin-bottom: 6px;
  font-weight: 600;
  cursor: pointer;
  color: ${(props) => props.theme.colors.textColorPrimary};
`;

const Colors = styled.div`
  width: 100%;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 21px 34px;
  overflow: hidden;
  @media (max-width: 1250px) {
    padding-right: 20px;
    height: 250px;
  }
`;

const ColorsHead = styled.span`
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  display: flex;
  margin-bottom: 10px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textColorPrimary};
  display: flex;
  width: 100%;
  justify-content: space-between;
  span {
    font-size: 15px;
    color: ${(props) => props.theme.colors.texColorPrimaryLight};
    user-select: none;
    cursor: pointer;
  }
`;

const ColorCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;

const Color = styled.div`
  width: 35px;
  height: 35px;
  box-shadow: 3px 3px 6px #00000029;
  border-radius: 35px;
  background-color: ${(props) => props.hex && props.hex};
  /* margin-bottom: 10px;
  margin-right: 10px; */
  margin: 10px 5px;
  margin-top: 0;
  cursor: pointer;
`;

const Prices = styled.div`
  width: 100%;
  height: 132px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
  border-radius: 10px;
  padding: 21px 34px;
  overflow: hidden;
`;

const GHead = styled.span`
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  display: flex;
  margin-bottom: 15px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textColorPrimary};
  display: flex;
  width: 100%;
  justify-content: space-between;
  span {
    font-size: 15px;
    color: ${(props) => props.theme.colors.texColorPrimaryLight};
    user-select: none;
    cursor: pointer;
  }
`;

const GHead2 = styled.span`
  font-family: 'Nunito', sans-serif;
  font-size: 16px;
  display: flex;
  margin-bottom: 15px;
  padding: 21px 34px 0 34px;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textColorPrimary};
  display: flex;
  width: 100%;
  justify-content: space-between;
  span {
    font-size: 15px;
    color: ${(props) => props.theme.colors.texColorPrimaryLight};
    user-select: none;
    cursor: pointer;
  }
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
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  font-weight: 400;
  user-select: none;
  color: ${(props) => props.theme.colors.textColorPrimary};
`;

const EInput = styled.input`
  font-family: 'Nunito', sans-serif;
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
`;

const Conts = styled.div`
  width: 100%;
  height: 346px;
  margin-bottom: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
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
    font-family: 'Nunito', sans-serif;
    font-size: 15px;
    margin-bottom: 8px;
    position: relative;
    font-weight: 400;
    color: ${(props) => props.theme.colors.textColorPrimary};
    cursor: pointer;
    user-select: none;
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
  box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
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
    filter: drop-shadow(2px 2px 2px rgba(0, 0, 0, 0.16));
  }
`;
const HoverSpanLeft = styled.span`
  position: absolute;
  top: 56%;
  transform: ${(props) => (props.translateY ? `translateY(-4.5px)` : `translateY(-4.5px)`)};
  left: -15px;
  display: ${(props) => (props.displayOn ? 'flex' : 'none')};
  border-radius: 6px;
`;

function StoreLeft({ filts, setFilts }) {
  const scRef = useRef();

  useEffect(() => {
    scRef.current.scrollTo(0, 0);
  }, [filts]);

  const catData = [
    {
      value: 'Möbel',
      leftMenus: [
        {
          value: 'Wohnzimmer',
          data: [
            {
              value: 'Sofas & Couches',
              data: [
                { id: 1, value: 'Ecksofas' },
                { id: 2, value: 'Ecksofas' },
                { id: 3, value: 'Ecksofas' },
                { id: 4, value: 'Ecksofas' },
                { id: 5, value: 'Ecksofas' },
                { id: 6, value: 'Ecksofas' },
                { id: 7, value: 'Ecksofas' },
                { id: 8, value: 'Ecksofas' },
                { id: 9, value: 'Ecksofas' },
                { id: 10, value: 'Ecksofas' }
              ]
            }
          ]
        }
      ]
    }
  ];

  const [cat, setCat] = useState();
  // eslint-disable-next-line no-unused-vars
  const [farbe, setFarbe] = useState();
  const [mark, setMark] = useState(false);
  const [mat, setMat] = useState(false);
  const [such, setSuch] = useState(false);

  const STEP = 1;
  const MIN = 0;
  const MAX = 100;
  const [values, setValues] = useState([25, 75]);

  return (
    <ContainerWrapper ref={scRef} filts={filts}>
      <Container filts={filts}>
        <FiltersClose
          onClick={() => {
            setFilts(false);
            document.getElementsByTagName('body')[0].style = 'overflow:unset';
          }}>
          <BsX size={30} color="#9C9C9C" />
        </FiltersClose>
        <Categories>
          <CategoriesInner>
            <CategoriesUL>
              {catData.map((e, idx) => (
                <CategoriesLi key={idx}>
                  <CategoriesLiSpan header>{e.value}</CategoriesLiSpan>
                  <CategoriesULIn>
                    {e.leftMenus.map((d, ix) => (
                      <CategoriesLi key={ix}>
                        <CategoriesLiSpan header>{d.value}</CategoriesLiSpan>
                        <CategoriesULIn>
                          {d.data.map((k, i) => (
                            <CategoriesLi key={i}>
                              <CategoriesLiSpan header>{k.value}</CategoriesLiSpan>
                              <CategoriesULIn>
                                {k.data.map((l, il) => (
                                  <CategoriesLi key={il}>
                                    <CategoriesLiSpan
                                      header
                                      onClick={() => setCat(l.id === cat ? '' : l.id)}>
                                      {l.value}
                                      <HoverSpanLeft
                                        translateY
                                        displayOn={l.id === cat ? true : false}>
                                        <svg width="6" height="6" viewBox="0 0 6 6">
                                          <circle id="elips" cx="3" cy="3" r="3" fill="#a0a0a0" />
                                        </svg>
                                      </HoverSpanLeft>
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
          <ColorsHead>
            Farbe <span>Zurücksetzen</span>
          </ColorsHead>
          <ColorCont>
            <Color
              onClick={(e) => setFarbe(e.target.attributes.value.nodeValue)}
              hex="#EBB2B2"
              value="#EBB2B2"
            />
            <Color
              onClick={(e) => setFarbe(e.target.attributes.value.nodeValue)}
              hex="#64B59D"
              value="#64B59D"
            />
            <Color
              onClick={(e) => setFarbe(e.target.attributes.value.nodeValue)}
              hex="#B2B488"
              value="#B2B488"
            />
            <Color
              onClick={(e) => setFarbe(e.target.attributes.value.nodeValue)}
              hex="#A29EE0"
              value="#A29EE0"
            />
            <Color
              onClick={(e) => setFarbe(e.target.attributes.value.nodeValue)}
              hex="#D96060"
              value="#D96060"
            />
            <Color
              onClick={(e) => setFarbe(e.target.attributes.value.nodeValue)}
              hex="#F5E369"
              value="#F5E369"
            />
            <Color
              onClick={(e) => setFarbe(e.target.attributes.value.nodeValue)}
              hex="#967832"
              value="#967832"
            />
            <Color
              onClick={(e) => setFarbe(e.target.attributes.value.nodeValue)}
              hex="#9B9B9B"
              value="#9B9B9B"
            />
            <Color
              onClick={(e) => setFarbe(e.target.attributes.value.nodeValue)}
              hex="#525252"
              value="#525252"
            />
            <Color
              onClick={(e) => setFarbe(e.target.attributes.value.nodeValue)}
              hex="#AD6363"
              value="#AD6363"
            />
            <Color
              onClick={(e) => setFarbe(e.target.attributes.value.nodeValue)}
              hex="#B9E89E"
              value="#B9E89E"
            />
            <Color
              onClick={(e) => setFarbe(e.target.attributes.value.nodeValue)}
              hex="#7B78C0"
              value="#7B78C0"
            />
            <Color
              onClick={(e) => setFarbe(e.target.attributes.value.nodeValue)}
              hex="#4F7A4C"
              value="#4F7A4C"
            />
            <Color
              onClick={(e) => setFarbe(e.target.attributes.value.nodeValue)}
              hex="#B2E2EB"
              value="#B2E2EB"
            />
            <Color
              onClick={(e) => setFarbe(e.target.attributes.value.nodeValue)}
              hex="#E7B2EB"
              value="#E7B2EB"
            />
          </ColorCont>
        </Colors>
        <Prices>
          <GHead>
            Preis
            <span onClick={() => setValues([MIN, MAX])}>Zurücksetzen</span>
          </GHead>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              marginLeft: '10px'
            }}>
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
                    height: '20px',
                    display: 'flex',
                    width: '190px'
                  }}>
                  <div
                    ref={props.ref}
                    style={{
                      height: '5px',
                      width: '100%',
                      borderRadius: '4px',
                      background: getTrackBackground({
                        values,
                        colors: ['#ccc', '#9C9C9C', '#ccc'],
                        min: MIN,
                        max: MAX
                      }),
                      alignSelf: 'center'
                    }}>
                    {children}
                  </div>
                </div>
              )}
              renderThumb={({ props }) => (
                <div
                  {...props}
                  style={{
                    ...props.style,
                    height: '20px',
                    width: '20px',
                    borderRadius: '20px',
                    backgroundColor: '#9C9C9C',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    boxShadow: '0px 2px 6px #AAA'
                  }}></div>
              )}
            />
            <Inputs>
              <InputDiv>
                <EInput
                  type="number"
                  min={MIN}
                  max={MAX}
                  onChange={(e) =>
                    setValues([
                      e.target.value > values[1]
                        ? values[1]
                        : e.target.value > MAX
                        ? MAX
                        : e.target.value < MIN
                        ? MIN
                        : e.target.value,
                      values[1]
                    ])
                  }
                  value={values[0]}></EInput>
                €
              </InputDiv>
              <InputDiv>
                <EInput
                  type="number"
                  min={MIN}
                  max={MAX}
                  onChange={(e) =>
                    setValues([
                      values[0],
                      e.target.value < values[0]
                        ? values[0]
                        : e.target.value > MAX
                        ? MAX
                        : e.target.value < MIN
                        ? MIN
                        : e.target.value
                    ])
                  }
                  value={values[1]}></EInput>
                €
              </InputDiv>
            </Inputs>
          </div>
        </Prices>
        <Conts>
          <GHead2>Suchvorschläge</GHead2>
          <ContsInner>
            <ul>
              <li onClick={() => setSuch(!such)}>
                Doppelbett 180x200
                <HoverSpanLeft displayOn={such}>
                  <svg width="6" height="6" viewBox="0 0 6 6">
                    <circle id="elips" cx="3" cy="3" r="3" fill="#a0a0a0" />
                  </svg>
                </HoverSpanLeft>
              </li>
            </ul>
          </ContsInner>
        </Conts>
        <Conts>
          <GHead2>
            Marke
            <span onClick={() => setMark(false)}>Zurücksetzen</span>
          </GHead2>
          <ContsInner>
            <ul>
              <li onClick={() => setMark(!mark)}>
                Ikea
                <HoverSpanLeft displayOn={mark}>
                  <svg width="6" height="6" viewBox="0 0 6 6">
                    <circle id="elips" cx="3" cy="3" r="3" fill="#a0a0a0" />
                  </svg>
                </HoverSpanLeft>
              </li>
            </ul>
          </ContsInner>
        </Conts>
        <Conts>
          <GHead2>
            Material
            <span onClick={() => setMat(false)}>Zurücksetzen</span>
          </GHead2>
          <ContsInner>
            <ul>
              <li onClick={() => setMat(!mat)}>
                Doppelbett 180x200
                <HoverSpanLeft displayOn={mat}>
                  <svg width="6" height="6" viewBox="0 0 6 6">
                    <circle id="elips" cx="3" cy="3" r="3" fill="#a0a0a0" />
                  </svg>
                </HoverSpanLeft>
              </li>
            </ul>
          </ContsInner>
        </Conts>
      </Container>
    </ContainerWrapper>
  );
}

export default StoreLeft;
