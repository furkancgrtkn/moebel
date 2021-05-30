import React, { useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import useHover from '../utils/useHover';

const MenuLeftItemLi = styled.li`
    width: 100%;
    margin-left: 0 !important;
    display: flex;
`;

const MenuLeftLink = styled.div`
    color: ${(props) => props.theme.colors.textColorPrimary};
    position: relative;
`;

const HoverSpan = styled.div`
    display: flex;
    position: absolute;
    top: 43%;
    transform: translateY(-50%);
    left: -12px;
    box-shadow: none;
    color: none;
    background-color: transparent;
`;

const FlowSpan = styled.div`
    font-size: 14px;
    font-family: 'Nunito', sans-serif;
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
                        {(isHovered || active === value) && (
                            <HoverSpan>
                                <svg width="6" height="6" viewBox="0 0 6 6">
                                    <circle id="elips" cx="3" cy="3" r="3" fill="#a0a0a0" />
                                </svg>
                            </HoverSpan>
                        )}
                    </MenuLeftLink>
                </a>
            </Link>
        </MenuLeftItemLi>
    );
}

export default MenuLeftItem;
