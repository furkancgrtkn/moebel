import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";
import { BsSearch, BsHeart, BsX, BsList } from "react-icons/bs";
import NavbarLink from "./NavbarLink";
import Link from "next/link";

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  svg {
    filter: drop-shadow(2px 2px 4px rgba(0, 0, 0, 0.2));
  }
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
  @media (max-width: 1250px) {
    padding: 0 10px;
  }
`;

const LogoContainer = styled.div`
  flex: 1;
  @media (max-width: 1250px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
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

  @media (max-width: 1250px) {
    display: none;
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

  @media (max-width: 1250px) {
    button:first-child {
      display: none;
      margin-right: 0px;
    }
  }
`;

const MenuButtons = styled.div`
  align-items: center;
  justify-content: flex-start;
  flex: 1;
  display: none;
  @media (max-width: 1250px) {
    display: flex;
  }
`;

const NavButton = styled.button`
  width: 40px;
  height: 40px;
  position: relative;
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  margin-right: ${(props) => props.openSearch && "0px !important"};

  img {
    object-fit: contain;
    border-radius: 10px;
  }
`;

const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  margin-right: ${(props) => props.openSearch && "0px !important"};

  img {
    object-fit: contain;
    border-radius: 10px;
  }
`;

const SearchBar = styled.div`
  width: 95%;
  max-width: 600px;
  height: 40px;
  position: relative;
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;

  @media (max-width: 1250px) {
    display: none;
  }

  svg {
    cursor: pointer;
  }
`;

const SearchBarMob = styled.div`
  width: 95%;
  max-width: 600px;
  height: 40px;
  position: relative;
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  align-items: center;
  justify-content: space-between;
  padding: 0 10px;
  display: none;
  @media (max-width: 1250px) {
    display: flex;
    width: 100%;
    max-width: calc(100% - 20px);
    margin-bottom: 15px;
  }

  svg {
    cursor: pointer;
  }
`;

const Search = styled.input`
  width: calc(100% - 65px);
  font-size: 16px;
  height: 40px;
  font-family: "Segoe UI", sans-serif;
  color: ${(props) => props.theme.colors.textColorPrimary};
  border: none;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: flex;
`;

const SearchDiv = styled.div`
  width: 95%;
  max-width: 600px;
  height: 150px;
  position: absolute;
  top: 65px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: flex;
  flex-direction: column;
  padding: 12px 0;

  svg {
    cursor: pointer;
  }

  @media (max-width: 1250px) {
    display: none;
  }
`;

const SearchDivMob = styled.div`
  width: 95%;
  max-width: 600px;
  height: 150px;
  position: absolute;
  top: 65px;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
  display: none;
  flex-direction: column;
  padding: 12px 0;

  svg {
    cursor: pointer;
  }

  @media (max-width: 1250px) {
    width: 100%;
    display: flex;
    max-width: calc(100% - 20px);
    margin-bottom: 15px;
  }
`;

const ShList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const ShItem = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: "Segoe UI", sans-serif;
  color: ${(props) => props.theme.colors.textColorPrimary};
  padding: 0 12px;
  margin-bottom: 8px;
`;

function Navbar() {
  const [openSearch, setOpenSearch] = useState(false);
  const [inputValue, setInputValue] = useState();
  return (
    <Container>
      <Navigation>
        <MenuButtons>
          <MenuButton openSearch={openSearch}>
            <BsList size={25} color="#9C9C9C" />
          </MenuButton>
        </MenuButtons>
        <LogoContainer>
          <Logo>
            <Image
              src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1620672673/Polygon_11_c6pgu9.png"
              alt="Moebel Logo"
              layout="fill"
            />
          </Logo>
        </LogoContainer>
        {!openSearch && (
          <NavLinks>
            <NavbarLink value="Möbel" />
            <NavbarLink value="Garten" />
            <NavbarLink value="Leuchten" />
            <NavbarLink value="Accessoires" />
            <NavbarLink value="Textilien" />
            <NavbarLink value="Küche" />
          </NavLinks>
        )}
        {openSearch && (
          <>
            <SearchBar>
              <BsSearch size={20} color="#9C9C9C" />
              <Search onChange={(e) => setInputValue(e.target.value)}></Search>
              <BsX
                size={25}
                color="#9C9C9C"
                onClick={() => {
                  setOpenSearch(false);
                  setInputValue(null);
                }}
              />
            </SearchBar>
            {inputValue && (
              <SearchDiv>
                <ShList>
                  <ShItem>
                    <Link href="/">
                      <a>Rote Stehlampen </a>
                    </Link>
                  </ShItem>
                  <ShItem>
                    <Link href="/">
                      <a>Rote Stehlampen </a>
                    </Link>
                  </ShItem>
                  <ShItem>
                    <Link href="/">
                      <a>Rote Stehlampen </a>
                    </Link>
                  </ShItem>
                  <ShItem>
                    <Link href="/">
                      <a>Rote Stehlampen </a>
                    </Link>
                  </ShItem>
                  <ShItem>
                    <Link href="/">
                      <a>Rote Stehlampen </a>
                    </Link>
                  </ShItem>
                  <ShItem>
                    <Link href="/">
                      <a>Rote Stehlampen </a>
                    </Link>
                  </ShItem>
                </ShList>
              </SearchDiv>
            )}
          </>
        )}
        <NavButtons>
          {!openSearch && (
            <NavButton onClick={() => setOpenSearch(true)}>
              <BsSearch size={24} color="#9C9C9C" />
            </NavButton>
          )}
          <NavButton openSearch={openSearch}>
            <BsHeart size={24} color="#9C9C9C" />
          </NavButton>
        </NavButtons>
      </Navigation>
      <SearchBarMob>
        <Search onChange={(e) => setInputValue(e.target.value)}></Search>
        <BsSearch size={24} color="#9C9C9C" />
      </SearchBarMob>
      {inputValue && (
        <SearchDivMob>
          <ShList>
            <ShItem>
              <Link href="/">
                <a>Rote Stehlampen </a>
              </Link>
            </ShItem>
            <ShItem>
              <Link href="/">
                <a>Rote Stehlampen </a>
              </Link>
            </ShItem>
            <ShItem>
              <Link href="/">
                <a>Rote Stehlampen </a>
              </Link>
            </ShItem>
            <ShItem>
              <Link href="/">
                <a>Rote Stehlampen </a>
              </Link>
            </ShItem>
            <ShItem>
              <Link href="/">
                <a>Rote Stehlampen </a>
              </Link>
            </ShItem>
            <ShItem>
              <Link href="/">
                <a>Rote Stehlampen </a>
              </Link>
            </ShItem>
          </ShList>
        </SearchDivMob>
      )}
    </Container>
  );
}

export default Navbar;
