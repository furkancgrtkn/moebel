import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import useHover from "./utils/useHover";

const MenuLeftItemLi = styled.li`
  width: 100%;
  margin-left: 0 !important;
  display: flex;
`;

const MenuLeftLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  font-family: "Segoe UI", sans-serif;
  color: ${(props) => props.theme.colors.textColorPrimary};
  position: relative;
`;

const HoverSpan = styled.span`
  width: 5px;
  height: 5px;
  box-shadow: 3px 3px 10px #00000040;
  background-color: #a0a0a0;
  position: absolute;
  top: 50%;
  left: -10px;
  transform: translateY(-50%);
  border-radius: 100%;
`;

function MenuLeftItem({ value, setActiveSub, active }) {
  const [hoverRef, isHovered] = useHover();
  useEffect(() => {
    if (isHovered) {
      setActiveSub(value);
    }
  }, [isHovered, active]);

  return (
    <MenuLeftItemLi ref={hoverRef}>
      <Link href="/">
        <a>
          <MenuLeftLink>
            {value}
            {(isHovered || active === value) && <HoverSpan></HoverSpan>}
          </MenuLeftLink>
        </a>
      </Link>
    </MenuLeftItemLi>
  );
}

export default MenuLeftItem;
