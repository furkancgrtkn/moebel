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
  height: 100px;
  margin: 16px 0 5px 0;
  padding: 16px 10px 10px 10px;
  border-top: 1px solid rgba(156, 156, 156, 0.2);
  flex-direction: column-reverse;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const LogoContainer = styled.div``;

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
  width: 100%;
  padding: 0 60px;
  justify-content: space-between;
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: "Segoe UI", sans-serif;
  color: ${(props) => props.theme.colors.textColorPrimary};
`;

function Footer() {
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
          <li>
            <Link href="/">
              <a>
                <NavLink>Impressum</NavLink>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <NavLink>Kontakt</NavLink>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <NavLink>Nutzungsbedingungen</NavLink>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <NavLink>Datenschutz</NavLink>
              </a>
            </Link>
          </li>
          <li>
            <Link href="/">
              <a>
                <NavLink>Sitemap</NavLink>
              </a>
            </Link>
          </li>
        </NavLinks>
      </Navigation>
    </Container>
  );
}

export default Footer;
