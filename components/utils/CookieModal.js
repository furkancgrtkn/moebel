import React, { useEffect, useState } from 'react';
import Cookies from 'universal-cookie';
import styled from 'styled-components';
import { BsX } from 'react-icons/bs';

const CookieDiv = styled.div`
  width: 95%;
  max-width: 753px;
  margin-left: 0 !important;
  display: flex;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 10;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
  border-radius: 8px;
  padding: 6px 10px 5px 10px;
  align-items: center;
`;

const Text = styled.p`
  font-family: 'Nunito', sans-serif;
  font-size: 14px;
  padding-right: 5px;
  color: ${(props) => props.theme.colors.textColorPrimary};
`;

const CloseButton = styled.button`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  display: flex;
  box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
  border-radius: 5px;
  margin-left: auto;
`;

function CookieModal() {
  const cookies = new Cookies();
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (cookies.get('acceptCookies')) {
      setOpen(false);
    } else {
      setOpen(true);
    }
  }, [open]);
  return (
    open && (
      <CookieDiv>
        <Text>
          Wir verwenden Cookies. Durch die Nutzung dieser Webseite Stimmen Sie unsere
          Datenschutzrichtlinien zu.
        </Text>
        <CloseButton
          onClick={() => {
            cookies.set('acceptCookies', true);
            setOpen(false);
          }}>
          <BsX size={20} color="#9C9C9C" />
        </CloseButton>
      </CookieDiv>
    )
  );
}

export default CookieModal;
