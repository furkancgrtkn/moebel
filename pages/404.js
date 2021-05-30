import React from 'react';
import Layout from '../components/Layout/Layout';
import styled from 'styled-components';
import Image from 'next/image';
import Link from 'next/link';

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
        margin-top: 30px;
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
        padding-top: 4px;
        display: flex;
        justify-content: center;
        font-size: 26px;
        font-family: 'Nunito', sans-serif;
        color: ${(props) => props.theme.colors.textColorPrimary};
        letter-spacing: 0.08px;
        align-items: center;
        background-color: ${(props) => props.theme.colors.backgroundPrimary};
        box-shadow: 3px 3px 10px rgb(0 0 0 / 10%);
        margin-top: 10px;
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

function Custom404() {
    return (
        <Layout>
            <ContainerEmpty>
                <Image
                    width="200"
                    height="184"
                    alt="404error"
                    src="https://res.cloudinary.com/dhy7yh4aa/image/upload/v1620880704/cloud-lightning-rain_gg7r6q.svg"
                />
                <p>Ups, da ist etwas schiefgelaufen.</p>
                <Link href="/">
                    <a>
                        <button>Zurück</button>
                    </a>
                </Link>
            </ContainerEmpty>
        </Layout>
    );
}

export default Custom404;
