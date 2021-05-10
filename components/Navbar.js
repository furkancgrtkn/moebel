import React from "react";
import styled from "styled-components";
import Image from "next/image";
import { BsSearch, BsHeart } from "react-icons/bs";
import NavbarLink from "./NavbarLink";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Navigation = styled.nav`
  width: 100%;
  max-width: 1240px;
  height: 40px;
  margin: 16px 0;
  padding: 0 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div`
  flex: 1;
`;

const Logo = styled.div`
  width: 100px;
  height: 40px;
  position: relative;
  img {
    object-fit: contain;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex: 2;
  height: 100%;
  align-items: center;

  li:first-child {
    margin-left: 0;
  }

  li {
    margin-left: 60px;
  }
`;

const NavButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  button:first-child {
    margin-right: 15px;
  }
  flex: 1;
`;

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  position: relative;
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 10px;
  background-color: #f9f9f9;
  img {
    object-fit: contain;
    border-radius: 10px;
  }
`;

function Navbar() {
  return (
    <Container>
      <Navigation>
        <LogoContainer>
          <Logo>
            <Image
              src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1620672673/Polygon_11_c6pgu9.png"
              alt="Moebel Logo"
              layout="fill"
            />
          </Logo>
        </LogoContainer>
        <NavLinks>
          <NavbarLink value="Möbel" />
          <NavbarLink value="Garten" />
          <NavbarLink value="Leuchten" />
          <NavbarLink value="Accessoires" />
          <NavbarLink value="Textilien" />
          <NavbarLink value="Küche" />
          <NavbarLink value="Marken" />
        </NavLinks>
        <NavButtons>
          <NavButton>
            <BsSearch size={20} color="#9C9C9C" />
          </NavButton>
          <NavButton>
            <BsHeart size={20} color="#9C9C9C" />
          </NavButton>
        </NavButtons>
      </Navigation>
    </Container>
  );
}

export default Navbar;
