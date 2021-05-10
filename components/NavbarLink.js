import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import Link from "next/link";
import MenuLeftItem from "./MenuLeftItem";
const Menu = styled.div`
  position: fixed;
  top: 56px;
  left: 50%;
  transform: translateX(-50%);
  width: 814px;
  height: 0px;
  box-shadow: 3px 3px 10px #0000001a;
  border-radius: 20px;
  visibility: hidden;
  display: flex;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

const MenuLeft = styled.div`
  width: 170px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;

const HoverSpan = styled.span`
  width: 5px;
  height: 5px;
  box-shadow: 3px 3px 10px #00000040;
  visibility: hidden;
  background-color: #a0a0a0;
  position: absolute;
  top: 29px;
  left: 50%;
  transform: translateX(-50%);
  border-radius: 100%;
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  height: 40px;
  font-family: "Segoe UI", sans-serif;
  color: ${(props) => props.theme.colors.textColorPrimary};
  position: relative;
`;

const NavLinkItem = styled.li`
  height: 100%;
  display: flex;
  align-items: center;
  :hover {
    ${Menu} {
      visibility: visible;
      height: 292px;
      transition: 0.4s;
      transition-property: height, visibility;
    }
    ${HoverSpan} {
      visibility: visible;
    }
  }
`;

const HoverSpanLeft = styled.span`
  width: 5px;
  height: 5px;
  box-shadow: 3px 3px 10px #00000040;
  background-color: #a0a0a0;
  position: absolute;
  top: 50%;
  left: -10px;
  transform: translateY(-50%);
  display: none;
  border-radius: 100%;
`;

const MenuLeftList = styled.ul`
  display: flex;
  flex: 2;
  flex-direction: column;
  padding: 20px 30px;
  justify-content: center;
  li {
    margin-bottom: 20px;
  }

  li:last-child {
    margin-bottom: 0px;
  }
`;

const MenuRight = styled.div`
  width: calc(100% - 170px);
  height: 100%;
  padding: 20px 30px;
`;

const MenuRightList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const MenuRightListItem = styled.li`
  margin-right: 30px;
  width: 130px;
  margin-left: 0 !important;
  margin-bottom: 20px;
`;

const MenuRightLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-family: "Segoe UI", sans-serif;
  color: ${(props) => props.theme.colors.textColorPrimary};
  position: relative;
  :hover {
    ${HoverSpanLeft} {
      display: block;
    }
  }
`;

function NavbarLink({ value }) {
  const [activeSub, setActiveSub] = useState("Wohnzimmer");
  return (
    <NavLinkItem>
      <Link href="/">
        <a>
          <NavLink>
            {value}
            <HoverSpan></HoverSpan>
          </NavLink>
        </a>
      </Link>
      <Menu>
        <MenuLeft>
          <MenuLeftList>
            <MenuLeftItem
              value="Wohnzimmer"
              active={activeSub}
              setActiveSub={setActiveSub}
            />
            <MenuLeftItem
              value="Schlafzimmer"
              active={activeSub}
              setActiveSub={setActiveSub}
            />
            <MenuLeftItem
              value="Esszimmer"
              active={activeSub}
              setActiveSub={setActiveSub}
            />
            <MenuLeftItem
              value="Badezimmer"
              active={activeSub}
              setActiveSub={setActiveSub}
            />
            <MenuLeftItem
              value="Kinderzimmer"
              active={activeSub}
              setActiveSub={setActiveSub}
            />
            <MenuLeftItem
              value="Arbeitszimmer"
              active={activeSub}
              setActiveSub={setActiveSub}
            />
            <MenuLeftItem
              value="Flur"
              active={activeSub}
              setActiveSub={setActiveSub}
            />
          </MenuLeftList>
        </MenuLeft>
        <MenuRight>
          <MenuRightList>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
            <MenuRightListItem>
              <Link href="/">
                <a>
                  <MenuRightLink>
                    {activeSub}
                    <HoverSpanLeft></HoverSpanLeft>
                  </MenuRightLink>
                </a>
              </Link>
            </MenuRightListItem>
          </MenuRightList>
        </MenuRight>
      </Menu>
    </NavLinkItem>
  );
}

export default NavbarLink;
