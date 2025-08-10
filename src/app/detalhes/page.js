"use client";

import { useSearchParams } from "next/navigation";
import Header from "../components/Header";
import styled from "styled-components";
import BotaoComprar from "../components/BotaoComprar";

const DetalhesContainer = styled.div`
    padding: 100px 1rem 0 1rem;
    display: flex;
`

export default function DetalhesHq() {
    const searchParams = useSearchParams();
    const id = searchParams.get("id");

    return (
        <>
            <Header />
            <DetalhesContainer>
                <img src="https://m.media-amazon.com/images/I/919iJKHbeVL._SL1500_.jpg" alt="" />
                <div>
                    <h2>Titulo</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    <p>R$ 30,00</p>
                    <BotaoComprar />
                </div>
            </DetalhesContainer>
        </>
    );
}