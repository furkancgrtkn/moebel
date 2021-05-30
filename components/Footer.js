import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Navigation = styled.footer`
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
    @media (max-width: 1250px) {
        height: unset;
        flex-direction: column;
    }
`;

const LogoContainer = styled.div`
    cursor: pointer;
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
    width: 100%;
    padding: 0 10px;
    justify-content: space-between;
    @media (max-width: 1250px) {
        flex-direction: column;
    }
`;

const NavLink = styled.div`
    display: flex;
    align-items: center;
    font-size: 14px;
    font-family: 'Segoe UI', sans-serif;
    color: ${(props) => props.theme.colors.textColorPrimary};
    @media (max-width: 1250px) {
        margin-top: 10px;
        justify-content: center;
        width: 100%;
    }
`;

function Footer() {
    const router = useRouter();

    return (
        <Container>
            <Navigation>
                <LogoContainer onClick={() => router.push('/')}>
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
                        <Link href="/impressum">
                            <a>
                                <NavLink>Impressum</NavLink>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/kontakt">
                            <a>
                                <NavLink>Kontakt</NavLink>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/nutzungsbedingungen">
                            <a>
                                <NavLink>Nutzungsbedingungen</NavLink>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/datenschutzerklarung">
                            <a>
                                <NavLink>Datenschutz</NavLink>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/sitemap">
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
