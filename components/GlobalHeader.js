import React from "react";
import styled from "styled-components";

const GHeader = styled.h2`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 20px 0;
  margin-bottom: 15px;
  font-size: 18px;
  font-family: "Nunito", sans-serif;
  color: ${(props) => props.theme.colors.textColorPrimary};
  letter-spacing: 0.08px;
`;
function GlobalHeader({ value }) {
  return <GHeader>{value}</GHeader>;
}

export default GlobalHeader;
