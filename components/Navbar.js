import React from "react";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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
  width: 40px;
  height: 40px;
  position: relative;
  img {
    object-fit: cover;
  }
`;

const NavLinks = styled.ul`
  display: flex;
  flex: 2;

  li:first-child {
    margin-left: 0;
  }

  li {
    margin-left: 60px;
  }
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: "Segoe UI", sans-serif;
  color: ${(props) => props.theme.colors.textColorPrimary};
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
              src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1620620565/Polygon_13_vwhiio.svg"
              alt="Moebel Logo"
              layout="fill"
            />
          </Logo>
        </LogoContainer>
        <NavLinks>
          <li>
            <Link href="/">
              <a>
                <NavLink>Möbel</NavLink>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <NavLink>Garten</NavLink>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <NavLink>Leuchten</NavLink>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <NavLink>Accessoires</NavLink>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <NavLink>Textilien</NavLink>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <NavLink>Küche</NavLink>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <NavLink>Marken</NavLink>
              </a>
            </Link>
          </li>
        </NavLinks>
        <NavButtons>
          <NavButton>
            <Image
              src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1620621488/search_kkwew7.svg"
              alt="Search"
              layout="fill"
            />
          </NavButton>
          <NavButton>
            <Image
              src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1620621489/heart_tborkb.svg"
              alt="Fav"
              layout="fill"
            />
          </NavButton>
        </NavButtons>
      </Navigation>
    </Container>
  );
}

export default Navbar;
