import React, { useState } from 'react';
import Layout from '../components/Layout/Layout';
import styled from 'styled-components';
import Link from 'next/link';
import { BsHeart } from 'react-icons/bs';
import GlobalHeader from '../components/GlobalHeader';
const ContainerEmpty = styled.div`
    width: 100%;
    max-width: 1245px;
    display: flex;
    padding: 0 5px;
    flex-direction: column;
    align-items: center;
    margin: auto;
    margin-bottom: 160px;
    margin-top: 110px;
    min-height: calc(100vh - 465px);

    p {
        width: 100%;
        display: flex;
        justify-content: center;
        margin-bottom: 20px;
        margin-top: 10px;
        font-size: 28px;
        font-family: 'Nunito', sans-serif;
        color: ${(props) => props.theme.colors.textColorPrimary};
        letter-spacing: 0.08px;
        @media (max-width: 1250px) {
            font-size: 20px;
        }
    }

    button {
        width: 196px;
        height: 50px;
        padding-top: 2px;
        margin-top: 10px;
        display: flex;
        justify-content: center;
        font-size: 26px;
        font-family: 'Nunito', sans-serif;
        color: ${(props) => props.theme.colors.textColorPrimary};
        letter-spacing: 0.08px;
        align-items: center;
        background-color: ${(props) => props.theme.colors.backgroundPrimary};
        box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
        border-radius: 15px;
        @media (max-width: 1250px) {
            font-size: 18px;
            width: 166px;
            height: 40px;
        }
    }

    @media (max-width: 1250px) {
        margin-bottom: 60px;
        margin-top: 30px;
    }
`;

const Container = styled.div`
    width: 100%;
    max-width: 1246px;
    display: flex;
    padding: 0 5px;
    flex-direction: column;
    align-items: center;
    margin: auto;
    min-height: calc(100vh - 234px);
    margin-bottom: 40px;
`;

const Cards = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    position: relative;
    @media (max-width: 1250px) {
        justify-content: center;
    }
`;

const Card = styled.div`
    box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
    border-radius: 10px;
    width: 299px;
    height: 350px;
    background-color: ${(props) => props.theme.colors.backgroundPrimary};
    margin: 5px;
    @media (max-width: 400px) {
        margin-left: auto;
        margin-right: auto;
    }
`;

function wunschliste() {
    // eslint-disable-next-line no-unused-vars
    const [empty, setEmpty] = useState(true);
    return (
        <Layout>
            {empty ? (
                <ContainerEmpty>
                    <BsHeart size={200} color="#E0E0E0" />
                    <p>Ihre Wunschliste ist leer.</p>
                    <Link href="/">
                        <a>
                            <button>Jetzt stöbern</button>
                        </a>
                    </Link>
                </ContainerEmpty>
            ) : (
                <Container>
                    <GlobalHeader value="Wunschliste" />
                    <Cards>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                        <Card></Card>
                    </Cards>
                </Container>
            )}
        </Layout>
    );
}

export default wunschliste;
