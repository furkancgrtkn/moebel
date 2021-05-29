import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import useHover from "../utils/useHover";

const MenuLeftItemLi = styled.li`
  width: 100%;
  margin-left: 0 !important;
  display: flex;
`;

const MenuLeftLink = styled.div`
  color: ${(props) => props.theme.colors.textColorPrimary};
  position: relative;
`;

const HoverSpan = styled.span`
  width: 6px;
  height: 6px;
  box-shadow: 3px 3px 10px rgb(0 0 0 / 16%);
  background-color: #a0a0a0;
  position: absolute;
  top: 45%;
  left: -10px;
  transform: translateY(-50%);
  border-radius: 6px;
  overflow: hidden;
  perspective: 1px;
`;

const FlowSpan = styled.div`
  font-size: 14px;
  font-family: "Nunito", sans-serif;
  font-weight: 600;
  color: ${(props) => props.theme.colors.textColorPrimary};
  position: relative;
  display: block;
  max-width: 110px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
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
      <Link href="/store/ecksofas">
        <a>
          <MenuLeftLink>
            <FlowSpan>{value}</FlowSpan>
            {(isHovered || active === value) && <HoverSpan></HoverSpan>}
          </MenuLeftLink>
        </a>
      </Link>
    </MenuLeftItemLi>
  );
}

export default MenuLeftItem;
