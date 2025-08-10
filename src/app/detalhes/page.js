"use client";

import { useSearchParams } from "next/navigation";
import Header from "../components/Header";
import styled from "styled-components";
import BotaoComprar, { StyledComprar } from "../components/BotaoComprar";
import Footer from "../components/Footer";

const DetalhesContainer = styled.div`
    padding: 100px 1rem 3rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    img {
        width: 100%;
        max-width: 500px;
        height: auto;
        object-fit: contain;
        overflow: hidden;
        align-self: flex-start;
    }

    h2 {
        font-family: var(--font-bebas-neue), sans-serif;
    }

    @media (min-width: 768px) {
        min-height: calc(100vh - 80px);
        padding: 100px 20rem 5rem 20rem;
        flex-direction: row;

        img {
            min-width: 400px;
        }
    }
`

const InformacoesHq = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2 {
        font-size: 32px;
    }

    @media (min-width: 768px) {
        ${StyledComprar} {
            align-self: flex-start;
        }
    }
`

const StyledPreco = styled.p`
    font-size: 24px;
    font-weight: bold;
`

const StyledDescricao = styled.div`
    margin-top: 30px;
    padding: 1rem 0 1rem 0;
    border-top: 1px solid #aaa;

    p {
        font-weight: bold;
        margin-bottom: 1rem;
    }
`

export default function DetalhesHq() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");
    const titulo = searchParams.get("titulo");
    const img = searchParams.get("img");
    const preco = searchParams.get("preco");
    const descricao = searchParams.get("descricao");

    return (
        <>
            <Header />
            <DetalhesContainer>
                <img src={img} alt={titulo} />
                <InformacoesHq>
                    <h2>{titulo}</h2>
                    <StyledPreco>{preco}</StyledPreco>
                    <BotaoComprar />
                    <StyledDescricao>
                        <p>Descrição:</p>
                        {descricao}
                    </StyledDescricao>
                </InformacoesHq>
            </DetalhesContainer>
            <Footer />
        </>
    );
}