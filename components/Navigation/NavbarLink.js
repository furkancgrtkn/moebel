import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import useHover from '../utils/useHover';
import MenuLeftItem from './MenuLeftItem';
const Menu = styled.div`
  position: absolute;
  top: 56px;
  left: 50%;
  transform: translateX(-50%);
  width: 814px;
  height: 0px;
  z-index: 199;
  box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
  border-radius: 20px;
  visibility: hidden;
  display: flex;
  overflow: hidden;
  background-color: ${(props) => props.theme.colors.backgroundPrimary};
`;

const MenuLeft = styled.div`
  width: 170px;
  background-color: ${(props) => props.theme.colors.backgroundSecondary};
  height: 292px;
  overflow-y: auto;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #aeaeae;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #999999;
  }
  ::-webkit-scrollbar-track {
    background: #f9f9f9;
    border-radius: 5px;
    box-shadow: inset 0px 0px 2px #e0e0e0;
  }
`;

const HoverSpan = styled.span`
  display: flex;
  visibility: hidden;
  position: absolute;
  top: 29px;
  left: 50%;
  box-shadow: none;
  color: none;
  background-color: transparent;
  transform: translateX(-50%);
`;

const NavLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  height: 40px;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
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
      transition-property: height, visibility;
    }
    ${HoverSpan} {
      visibility: visible;
    }
  }
`;

const HoverSpanLeft = styled.span`
  position: absolute;
  top: 43%;
  left: -12px;
  transform: translateY(-50%);
  display: none;
  box-shadow: none;
  color: none;
  background-color: transparent;
`;

const MenuLeftList = styled.ul`
  display: flex;
  flex: 2;
  flex-direction: column;
  padding: 18px 40px;
  justify-content: center;
  li {
    margin-bottom: 25px;
  }

  li:last-child {
    margin-bottom: 0px;
  }
`;

const MenuRight = styled.div`
  width: calc(100% - 170px);
  height: 292px;
  overflow-y: auto;
  margin-right: 5px;
  padding: 18px 25px 0px 30px;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  ::-webkit-scrollbar-thumb {
    background: #aeaeae;
    border-radius: 5px;
  }
  ::-webkit-scrollbar-thumb:hover {
    background: #999999;
  }
  ::-webkit-scrollbar-track {
    background: #f9f9f9;
    border-radius: 5px;
    box-shadow: inset 0px 0px 2px #e0e0e0;
  }
`;

const MenuRightList = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const MenuRightListItem = styled.li`
  margin-right: 30px;
  width: 155px;
  margin-left: 0 !important;
  margin-bottom: 25px;
  position: relative;
  :hover {
    ${HoverSpanLeft} {
      display: flex;
    }
  }
`;

const MenuRightLink = styled.div`
  font-size: 14px;
  font-family: 'Nunito', sans-serif;
  font-weight: 600;
  white-space: nowrap;
  display: block;
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  color: ${(props) => props.theme.colors.textColorPrimary};
  position: relative;
`;

function NavbarLink({ value, activeSub }) {
  const [active, setActive] = useState(
    activeSub.filter((val) => val.value === value)[0].leftMenus[0]?.value
  );

  const [hoverRefZ, isHover] = useHover();

  useEffect(() => {
    setActive(activeSub.filter((val) => val.value === value)[0].leftMenus[0]?.value);
  }, [isHover]);

  return (
    <NavLinkItem>
      <Link href="/store/ecksofas">
        <a>
          <NavLink ref={hoverRefZ}>
            {value}
            <HoverSpan>
              <svg width="6" height="6" viewBox="0 0 6 6">
                <circle id="elips" cx="3" cy="3" r="3" fill="#a0a0a0" />
              </svg>
            </HoverSpan>
          </NavLink>
        </a>
      </Link>
      {activeSub.filter((val) => val.value === value)[0].leftMenus[0] && (
        <Menu>
          <MenuLeft>
            <MenuLeftList>
              {activeSub
                .filter((val) => val.value === value)[0]
                .leftMenus.map((e, idx) => (
                  <MenuLeftItem
                    key={idx}
                    value={e.value}
                    active={active}
                    setActiveSub={setActive}
                  />
                ))}
            </MenuLeftList>
          </MenuLeft>
          <MenuRight>
            <MenuRightList>
              {activeSub
                .filter((val) => val.value === value)[0]
                .leftMenus.filter((v) => v.value === active)[0]
                .data.map((d, idx) => (
                  <MenuRightListItem key={idx}>
                    <Link href="/store/ecksofas">
                      <a>
                        <MenuRightLink>{d.value}</MenuRightLink>
                      </a>
                    </Link>
                    <HoverSpanLeft>
                      <svg width="6" height="6" viewBox="0 0 6 6">
                        <circle id="elips" cx="3" cy="3" r="3" fill="#a0a0a0" />
                      </svg>
                    </HoverSpanLeft>
                  </MenuRightListItem>
                ))}
            </MenuRightList>
          </MenuRight>
        </Menu>
      )}
    </NavLinkItem>
  );
}

export default NavbarLink;
